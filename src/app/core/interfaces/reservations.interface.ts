import { IGuests } from "./guests.interface";

export interface IReservations {
    id: string;
    userId: string;
    hotelId: string;
    roomId: string;
    checkIn: string; 
    checkOut: string; 
    guests: IGuests[];
    emergencyContact: IEmergencyContact;
    status: 'confirmed' | 'pending' | 'canceled';
  }
  
  
  export interface IEmergencyContact {
    name: string;
    phone: string;
  }