import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IHotels } from '../../interfaces/hotels.interface';
import { IUser } from '../../interfaces/user.interface';
import { HotelsServiceService } from '../../services/hotels-service.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-form-hotel',
  imports: [
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './form-hotel.component.html',
  styleUrl: './form-hotel.component.sass',
})
export class FormHotelComponent {
  private formBuilder = inject(FormBuilder);
  private hotelService = inject(HotelsServiceService);
  private modalService = inject(ModalService);
  @Input() hotel: IHotels | null = null;
  @Output() refresh = new EventEmitter<void>();
  formHotel = this.formBuilder.group({
    name: ['', Validators.required],
    location: [ '', Validators.required],
    details: [ '', Validators.required],
  });

  ngOnChanges() {
    if (this.hotel) {
      this.formHotel.patchValue({
        name: this.hotel.name,
        location: this.hotel.location,
        details: this.hotel.details,
      });
    }
  }

  create() {
    const userSesion: IUser = JSON.parse(
      localStorage.getItem('session') || '{}'
    );
    if (this.formHotel.valid) {
      const hotel = {
        ...this.formHotel.value,
        is_active: 'true',
        created_by: userSesion.id,
      } as IHotels;

      this.hotelService.createHotel(hotel).subscribe((response: IHotels) => {
        if (response) {
          this.refresh.emit();

          this.modalService.setState(false);
        }
      });
    }
  }

  edit() {
    if (this.formHotel.valid) {
      const hotel = { ...this.formHotel.value, id: this.hotel?.id } as IHotels;
      this.hotelService
        .updateHotel(hotel as IHotels)
        .subscribe((response: IHotels) => {
          if (response) {
            this.refresh.emit();
            this.modalService.setState(false);
          }
        });
    }
  }
}
