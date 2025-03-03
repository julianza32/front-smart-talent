import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IRooms } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsServiceService {
  constructor(private readonly http: HttpClient) {}

  getRooms() {
    return this.http.get<IRooms[]>(`${environment.apiUrl}/rooms/all`);
  }
  createRoom(room: IRooms) {
    return this.http.post<IRooms>(`${environment.apiUrl}/rooms/create`, 
      room,
    );
  }
  updateRoom(room: IRooms) {
    return this.http.put<IRooms>(`${environment.apiUrl}/rooms/update/${room.id}`, 
      room,
    );
  }
  deleteRoom(id: string) {
    return this.http.delete<boolean>(`${environment.apiUrl}/rooms/delete/${id}`);
  }
  getRoom(id: string) {
    return this.http.get(`${environment.apiUrl}/rooms/${id}`);
  }
  getRoomsByHotel(id: string) {
    return this.http.get<IRooms[]>(`${environment.apiUrl}/rooms/get-by-hotel/${id}`);
  }

  getRoomsByType(type: string) {
    return this.http.get<IRooms[]>(`${environment.apiUrl}/rooms/get-by-type/${type}`);
  }
  getRoomsByStatus(id: string) {
    return this.http.get<IRooms[]>(`${environment.apiUrl}/rooms/get-by-hotel/enabled/${id}`);
  }

  updateStatusRoom(id: string, status: string) {
    return this.http.post(`${environment.apiUrl}/rooms/toggle-status/${id}/${status}`,{});
  }


}
