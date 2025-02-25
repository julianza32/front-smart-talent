import { Component, Inject, inject } from '@angular/core';
import {
  IReservationsDetailDto,
} from '../../../core/interfaces/reservations.interface';
import { ReservationsServiceService } from '../../../core/services/reservations-service.service';
import { IGuests } from '../../../core/interfaces/guests.interface';
import { TableModule } from 'primeng/table';
import { ContainModalComponent } from "../../../components/contain-modal/contain-modal.component";
import { ModalService } from '../../../core/services/modal.service';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservations',
  imports: [TableModule, ContainModalComponent,ButtonModule, DatePipe],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.sass',
})
export class ReservationsComponent {
  listReservations: IReservationsDetailDto[] = [];
  reservationsService = inject(ReservationsServiceService);
  modalService = inject(ModalService);
  loading: boolean = false;
  guest: IGuests[] = [];

  ngOnInit() {
    this.getReservations();
  }
  getReservations() {
    this.loading = true;
    this.reservationsService.getReservations().subscribe((response) => {
      console.log(response);
      
      this.listReservations = response;
      this.loading = false;
    });
  }

  changeStatus(id_reservation: string, status: string) {
    this.reservationsService
      .changeStatusReservation(id_reservation, status)
      .subscribe((resp) => {
        if (resp) {
          this.getReservations();
        }
      });
  }
  openGuest(list : IGuests []){
    this.guest = list;
    this.modalService.setState(true);
  }
}
