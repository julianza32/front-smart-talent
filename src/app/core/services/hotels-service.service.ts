import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IHotels } from '../interfaces/hotels.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelsServiceService {
  constructor(private readonly http: HttpClient) {}

  private valueSource = new BehaviorSubject<IHotels>({} as IHotels);
  hotel$ = this.valueSource.asObservable();

  private tabSource = new BehaviorSubject<string>('0');
  tab$ = this.tabSource.asObservable();

  setHotel(hotel: IHotels) {
    this.valueSource.next(hotel);
  }
  setTab(newValue: string) {
    console.log('newValue', newValue);
    this.tabSource.next(newValue);
  }

  getHotels() {
    return this.http.get<IHotels[]>(`${environment.apiUrl}/hotels/all`);
  }
  getHotel(id: string) {
    return this.http.get<IHotels>(`${environment.apiUrl}/hotels/${id}`);
  }
  createHotel(hotel: IHotels) {
    return this.http.post<IHotels>(
      `${environment.apiUrl}/hotels/create`,
      hotel
    );
  }
  deleteHotel(id: string) {
    return this.http.delete<boolean>(`${environment.apiUrl}/hotels/${id}`);
  }
  updateHotel(hotel: IHotels) {
    return this.http.put<IHotels>(
      `${environment.apiUrl}/hotels/update/${hotel.id}`,
      hotel
    );
  }
  activateHotel(id: string, active: string) {
    return this.http.put<IHotels>(
      `${environment.apiUrl}/hotels/activate/${id}/${active}`,
      {}
    );
  }
}
