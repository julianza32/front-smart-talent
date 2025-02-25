import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContainModalComponent } from '../../components/contain-modal/contain-modal.component';
import { LoginComponent } from '../../core/forms/login/login.component';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { TabsHomeComponent } from '../../components/tabs-home/tabs-home.component';
import { ListReservationsComponent } from "../../components/list-reservations/list-reservations.component";
import { ModalLoginComponent } from "../../components/modal-login/modal-login.component";

@Component({
  selector: 'app-my-reservations',
  imports: [HeaderComponent, LoginComponent, GalleriaComponent, ListReservationsComponent, ModalLoginComponent],
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.sass'
})
export class MyReservationsComponent {
  showModal = false;
  images = ['./img1.jpeg', './img2.jpeg', './img3.jpeg'];

 

  
}
