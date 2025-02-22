import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IHotels } from '../interfaces/hotels.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {


  constructor(private readonly http: HttpClient) { }
  
  getHotels() {
    return this.http.get(`${environment.apiUrl}/hotels/all`);
  }
  getHotel(id: string) {
    return this.http.get(`${environment.apiUrl}/hotels/${id}`);
  }
  createHotel(hotel: IHotels) {
    return this.http.post(`${environment.apiUrl}/hotels/create`, {
      hotel,
    });
  }
  deleteHotel(id: string) { 
    return this.http.delete(`${environment.apiUrl}/hotels/${id}`);
  }
  updateHotel(hotel: IHotels) {
    return this.http.put(`${environment.apiUrl}/hotels/update/${hotel.id}`, {
      hotel,
    });
  }
  activateHotel(id: string) {
    return this.http.put(`${environment.apiUrl}/hotels/activate/${id}`, {});
  }
  
}
