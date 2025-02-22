import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ILogin, IUser } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<IUser[]>(`${environment.apiUrl}/users/all`);
  }
  register(formRegister: IUser) {
    return this.http.post<IUser>(`${environment.apiUrl}/users/create`, {
      formRegister
    });
  }
  getUser(id: string) {
    return this.http.get<IUser>(`${environment.apiUrl}/users/${id}`);
  }
  editUser(formEdit: IUser) {
    return this.http.put<IUser>(`${environment.apiUrl}/users/update/${formEdit.id}`, {
      formEdit
    });
  }
  deleteUser(id: string) {
    return this.http.delete<IUser>(`${environment.apiUrl}/users/${id}`);
  }

  login(formLogin: ILogin) {
    return this.http.post<IUser>(`${environment.apiUrl}/users/login`, formLogin);
  }

}
