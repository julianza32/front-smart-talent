import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { IReservations } from '../../interfaces/reservations.interface';
import { ReservationsServiceService } from '../../services/reservations-service.service';
import { FormGuestComponent } from '../form-guest/form-guest.component';
import { IGuests } from '../../interfaces/guests.interface';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { IRooms } from '../../interfaces/room.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-reservations',
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    CalendarModule,
    FormGuestComponent,
    CommonModule,
    TableModule,
    InputNumberModule
  ],
  templateUrl: './form-reservations.component.html',
  styleUrl: './form-reservations.component.sass',
})
export class FormReservationsComponent {
  private formBuilder = inject(FormBuilder);
  private reservationService = inject(ReservationsServiceService);
  private router = inject(Router);
  @Input() InfoRoom: IRooms = {} as IRooms;
  listGuests: IGuests[] = [];
  formReservation: FormGroup = this.formBuilder.group({
    checkIn: [null, Validators.required],
    checkOut: [null, Validators.required],
    numberOfGuests: [1, [Validators.required, Validators.min(1)]],
    nameEmergencyContact: ['', Validators.required],
    phoneEmergencyContact: [
      '',
      [Validators.required, Validators.pattern(/^\d+$/)],
    ],
  });

  submitForm() {
    if (this.formReservation.valid) {
      const reservation = {
        ...this.formReservation.value,
        userId: this.listGuests[0].documentNumber,
        is_active: true,
        roomId: this.InfoRoom.id,
        guests: this.listGuests,
        hotelId: this.InfoRoom.id_hotel,
        status: 'Pendiente',
        emergencyContact: {
          name: this.formReservation.value.nameEmergencyContact,
          phone: this.formReservation.value.phoneEmergencyContact,
        }
        
      } as IReservations;
      this.reservationService
        .createReservation(reservation)
        .subscribe((response:IReservations) => {
        this.router.navigate(['/reserva', response.id]);
        });
    }
  }

  addGuest(guest: IGuests) {
    this.listGuests.push(guest);
  }
  removeGuest(guest: IGuests) {
    this.listGuests = this.listGuests.filter((g) => g !== guest);
  }
}
