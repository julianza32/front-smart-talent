import { Component, Inject, inject } from '@angular/core';
import { IReservationsDetailDto } from '../../../core/interfaces/reservations.interface';
import { ReservationsServiceService } from '../../../core/services/reservations-service.service';
import { IGuests } from '../../../core/interfaces/guests.interface';
import { TableModule } from 'primeng/table';
import { ContainModalComponent } from '../../../components/contain-modal/contain-modal.component';
import { ModalService } from '../../../core/services/modal.service';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { RoomsServiceService } from '../../../core/services/rooms-service.service';

@Component({
  selector: 'app-reservations',
  imports: [TableModule, ContainModalComponent, ButtonModule, DatePipe],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.sass',
})
export class ReservationsComponent {
  listReservations: IReservationsDetailDto[] = [];
  reservationsService = inject(ReservationsServiceService);
  modalService = inject(ModalService);
  roomService = inject(RoomsServiceService);
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

  changeStatus(reservation: IReservationsDetailDto, status: string) {
    this.reservationsService
      .changeStatusReservation(reservation.id, status)
      .subscribe((resp) => {
        if (resp) {
          this.getReservations();
        }
      });
    if (status === 'Cancelada') {
      this.roomService
        .updateStatusRoom(reservation.id_room, 'Habilitada')
        .subscribe((resp) => {});
    }
  }
  openGuest(list: IGuests[]) {
    this.guest = list;
    this.modalService.setState(true);
  }
}
