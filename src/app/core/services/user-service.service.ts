import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ILogin, IUser } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;
  getUsers() {
    return this.http.get<IUser[]>(`${this.apiUrl}/users/all`);
  }
  create(formRegister: IUser) {
    return this.http.post<IUser>(`${this.apiUrl}/users/create`, formRegister);
  }
  getUser(id: string) {
    return this.http.get<IUser>(`${this.apiUrl}/users/${id}`);
  }
  editUser(formEdit: IUser) {
    return this.http.put<IUser>(
      `${this.apiUrl}/users/update/${formEdit.id}`,
      formEdit
    );
  }
  deleteUser(id: string) {
    return this.http.delete<IUser>(`${this.apiUrl}/users/delete/${id}`);
  }

  login(formLogin: ILogin) {
    return this.http.post<IUser>(`${this.apiUrl}/users/login`, formLogin);
  }
}
