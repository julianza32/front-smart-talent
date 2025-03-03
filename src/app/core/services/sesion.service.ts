import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  private sessionSubject = new BehaviorSubject<IUser | undefined>(this.getSession());
  session$ = this.sessionSubject.asObservable();

  private getSession(): IUser | undefined {
    const storedSession = localStorage.getItem('session');
    return storedSession ? JSON.parse(storedSession) : undefined;
  }

  setSession(user: IUser) {
    localStorage.setItem('session', JSON.stringify(user));
    this.sessionSubject.next(user);
  }

  clearSession() {
    localStorage.removeItem('session');
    this.sessionSubject.next(undefined);
  }
}
