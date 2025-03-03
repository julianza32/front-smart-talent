import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ContainModalComponent } from '../../components/contain-modal/contain-modal.component';
import { LoginComponent } from '../../core/forms/login/login.component';
import { GalleriaComponent } from "../../components/galleria/galleria.component";
import { TabsHomeComponent } from "../../components/tabs-home/tabs-home.component";
import { ModalLoginComponent } from "../../components/modal-login/modal-login.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, GalleriaComponent, TabsHomeComponent, ModalLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  standalone: true,
})
export class HomeComponent {
  showModal = false;
  images = ['./img1.jpeg', './img2.jpeg', './img3.jpeg'];

 
}
