export interface IUser {
  id?: string;
  name: string;
  email: string;
  password_hash: string;
  phone: string;
  type: 'Agente' | 'Viajero';
  create_at?: Date;
}

export interface ILogin {
  email: string;
  password: string;
}
