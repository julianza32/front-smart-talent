import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IReservations, IReservationsDetailDto, IReservationsDetails } from '../interfaces/reservations.interface';
import { IGuests } from '../interfaces/guests.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationsServiceService {
  constructor(private readonly http: HttpClient) {}

  getReservations() {
    return this.http.get<IReservationsDetailDto[]>(`${environment.apiUrl}/reservations/all`);
  }
  getReservation(id: string) {
    return this.http.get<IReservationsDetails>(`${environment.apiUrl}/reservations/details/${id}`);
  }
  getReservationsByUser(id: string) {
    return this.http.get<IReservationsDetails[]>(`${environment.apiUrl}/reservations/by-user/${id}`);
  }
  getReservationsByHotel(id: string) {
    return this.http.get<IReservations[]>(`${environment.apiUrl}/reservations/by-hotel/${id}`);
  }
  createReservation(reservation: IReservations) {
    return this.http.post<IReservations>(`${environment.apiUrl}/reservations/create`, 
      reservation,
    );
  }
  updateReservation(reservation: IReservations) {
    return this.http.put<IReservations>(
      `${environment.apiUrl}/reservations/update/${reservation.id}`,
      {
        reservation,
      }
    );
  }
  addGuestToReservation(id: string, guest: IGuests[]) {
    return this.http.put(`${environment.apiUrl}/reservations/add-guest/${id}`, {
      guest,
    });
  }

  changeStatusReservation(id: string, status: string) {
    return this.http.put(
      `${environment.apiUrl}/reservations/change-status/${id}/${status}`,
      {
        status,
      }
    );
  }
}
