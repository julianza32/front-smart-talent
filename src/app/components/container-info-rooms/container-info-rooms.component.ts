import { Component, inject, Input } from '@angular/core';
import { IRooms } from '../../core/interfaces/room.interface';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HotelsServiceService } from '../../core/services/hotels-service.service';
import { IHotels } from '../../core/interfaces/hotels.interface';
import { ContainModalComponent } from '../contain-modal/contain-modal.component';
import { ContainerFormComponent } from '../container-form/container-form.component';
import { FormReservationsComponent } from '../../core/forms/form-reservations/form-reservations.component';
import { ModalService } from '../../core/services/modal.service';
import { ModalReservationComponent } from '../modal-reservation/modal-reservation.component';
import { ReservationComponent } from '../../pages/reservation/reservation.component';

@Component({
  selector: 'app-container-info-rooms',
  imports: [
    CommonModule,
    ButtonModule,
    ContainerFormComponent,
    FormReservationsComponent,
    ModalReservationComponent,
  ],
  templateUrl: './container-info-rooms.component.html',
  styleUrl: './container-info-rooms.component.sass',
})
export class ContainerInfoRoomsComponent {
  @Input() listRooms: IRooms[] = [];

  hotelService = inject(HotelsServiceService);
  modalService = inject(ModalService);
  hotel: IHotels = {} as IHotels;

  roomSelected: IRooms = {} as IRooms;

  ngOnInit() {
    this.hotelService.hotel$.subscribe((hotel) => {
      this.hotel = hotel;
    });
  }
  back() {
    this.hotelService.setTab('0');
  }
  openModal(room: IRooms) {
    this.modalService.setStateReservation(true);
    this.roomSelected = room;
  }
}
