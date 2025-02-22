import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ContainModalComponent } from '../../components/contain-modal/contain-modal.component';
import { NgIf } from '@angular/common';
import { LoginComponent } from '../../core/forms/login/login.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ContainModalComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  standalone: true,
})
export class HomeComponent {
  componentLogin: any = null;
  showModal = false;

  openModal(event: boolean) {
    this.componentLogin = LoginComponent;
    console.log(this.componentLogin);
    
    this.showModal = event;
  }
}
