import { Component, inject, Input } from '@angular/core';
import { ReservationsServiceService } from '../../core/services/reservations-service.service';
import { IReservationsDetails } from '../../core/interfaces/reservations.interface';
import { ContainerInfoReservationComponent } from "../container-info-reservation/container-info-reservation.component";

@Component({
  selector: 'app-list-reservations',
  imports: [ContainerInfoReservationComponent],
  templateUrl: './list-reservations.component.html',
  styleUrl: './list-reservations.component.sass',
})
export class ListReservationsComponent {

}
