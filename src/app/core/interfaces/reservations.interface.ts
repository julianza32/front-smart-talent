import { GuestsServiceService } from "../services/guests-service.service";
import { IGuests } from "./guests.interface";
import { IHotels } from "./hotels.interface";
import { IRooms } from "./room.interface";

export interface IReservations {
    id: string;
    userId: string;
    hotelId: string;
    roomId: string;
    checkIn: string; 
    checkOut: string; 
    guests: IGuests[];
    emergencyContact: IEmergencyContact;
    status: 'Confirmada' | 'Pendiente' | 'Cancelada';
  }
  
  
  export interface IEmergencyContact {
    name: string;
    phone: string;
  }

  export interface IReservationsDetails {
    hotel: IHotels;
    room: IRooms;
    reservation: IReservations;
  }
  

  export interface IReservationsDetailDto {
    id: string;
    checkIn: string;
    checkOut: string;
    guests: IGuests[];
    name_hotel: string;
    number_room: number;
    emergencyContact: IEmergencyContact;
    status: 'Confirmada' | 'Pendiente' | 'Cancelada';
  }