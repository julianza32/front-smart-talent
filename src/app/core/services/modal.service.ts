import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }


    private modalSourceLogin = new BehaviorSubject<boolean>(false);
    modalLogin$ = this.modalSourceLogin.asObservable();
  
    setStateLogin(state: boolean) {
      this.modalSourceLogin.next(state);
    }
    private modalSourceReservation = new BehaviorSubject<boolean>(false);
    modalReservation$ = this.modalSourceReservation.asObservable();
  
    setStateReservation(state: boolean) {
      this.modalSourceReservation.next(state);
    }

    private modalSource = new BehaviorSubject<boolean>(false);
    modal$ = this.modalSource.asObservable();

    setState(state: boolean) {
      this.modalSource.next(state);
    }
}
