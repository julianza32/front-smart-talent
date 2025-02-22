export interface IRooms {
    id: string;
    type: TypeRooms;
    base_cost: number;
    taxes: number;
    location: string;
    status: StatusRooms;
    id_hotel: string;
    number_room: number;
}

export interface TypeRooms {
    enum: ['Sencilla', 'Doble', 'Triple']
}
export interface StatusRooms {
    enum: ['Habilitada','Deshabilitada'];
}