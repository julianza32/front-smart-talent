import { Component, inject, Input } from '@angular/core';
import { IReservationsDetails } from '../../core/interfaces/reservations.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationsServiceService } from '../../core/services/reservations-service.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-container-info-reservation',
  imports: [
    CommonModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './container-info-reservation.component.html',
  styleUrl: './container-info-reservation.component.sass',
})
export class ContainerInfoReservationComponent {
  @Input() reservations: IReservationsDetails[] = [];
  router = inject(Router);
  navigateToReservation(id: string) {
    console.log(id);
    
    this.router.navigate([`/reserva/${id}`]);
  }

  private formBuilder = inject(FormBuilder);
  private serviceReserations = inject(ReservationsServiceService);
  formSearch = this.formBuilder.group({
    search: ['', Validators.required],
  });
  submitForm() {
    if (this.formSearch.valid) {
      this.getReservations(this.formSearch.value.search ?? '');
    }
  }

  getReservations(idUser: string) {
    {
      this.serviceReserations
        .getReservationsByUser(idUser)
        .subscribe((response: IReservationsDetails[]) => {
          this.reservations = response;
        });
    }
  }
}
