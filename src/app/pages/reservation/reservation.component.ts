import { Component, inject } from '@angular/core';
import { ReservationsServiceService } from '../../core/services/reservations-service.service';
import { ActivatedRoute } from '@angular/router';
import { IReservationsDetails } from '../../core/interfaces/reservations.interface';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule,SkeletonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.sass'
})
export class ReservationComponent {
  reservationsService = inject(ReservationsServiceService);
  idReservation = '';
  route = inject(ActivatedRoute);
  reservation: IReservationsDetails = {} as IReservationsDetails;
  loading = false;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idReservation = params.get('idreserva') || '';
      this.getReservation(this.idReservation);
    });
  }
  getReservation(id: string) {
    this.loading = true;
    this.reservationsService.getReservation(id).subscribe((reservations) => {
      this.reservation = reservations;
      this.loading = false;
    
    });
  }
}
