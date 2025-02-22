import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IGuests } from '../interfaces/guests.interface';

@Injectable({
  providedIn: 'root'
})
export class GuestsServiceService {

  constructor(private readonly http: HttpClient) { }

  getGuests() {
    return this.http.get(`${environment.apiUrl}/guests/all`);
  }
  getGuest(id: string) {
    return this.http.get(`${environment.apiUrl}/guests/${id}`);
  }
  updateGuest(id: string, guest: any) {
    return this.http.put(`${environment.apiUrl}/guests/update/${id}`, {
      guest,
    });
  }
  createGuest(guest: IGuests) { 
    return this.http.post(`${environment.apiUrl}/guests/create`, {
      guest,
    });
  }
  deleteGuest(id: string) {
    return this.http.delete(`${environment.apiUrl}/guests/${id}`);
  }
}
