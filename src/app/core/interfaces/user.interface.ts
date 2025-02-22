export interface IUser {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    phone: string;
    type: typeUser;
    create_at?: Date;
}
export interface typeUser{
    enum: ['Agente', 'Viajero']
}

export interface ILogin {
    email: string;
    password: string;
}