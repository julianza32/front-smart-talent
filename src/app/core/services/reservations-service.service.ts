import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IReservations } from '../interfaces/reservations.interface';
import { IGuests } from '../interfaces/guests.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationsServiceService {
  constructor(private readonly http: HttpClient) {}

  getReservations() {
    return this.http.get(`${environment.apiUrl}/reservations/all`);
  }
  getReservation(id: string) {
    return this.http.get(`${environment.apiUrl}/reservations/${id}`);
  }
  getReservationsByUser(id: string) {
    return this.http.get(`${environment.apiUrl}/reservations/by-user/${id}`);
  }
  getReservationsByHotel(id: string) {
    return this.http.get(`${environment.apiUrl}/reservations/by-hotel/${id}`);
  }
  createReservation(reservation: IReservations) {
    return this.http.post(`${environment.apiUrl}/reservations/create`, {
      reservation,
    });
  }
  updateReservation(reservation: IReservations) {
    return this.http.put(
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
      `${environment.apiUrl}/reservations/change-status/${id}`,
      {
        status,
      }
    );
  }
}
