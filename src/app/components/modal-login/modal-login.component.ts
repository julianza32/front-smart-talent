import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../core/services/modal.service';
import { ImageHotelsService } from '../../core/services/image-hotels.service';
import { FormUserComponent } from '../../core/forms/form-user/form-user.component';
import { LoginComponent } from "../../core/forms/login/login.component";

@Component({
  selector: 'app-modal-login',
  imports: [CommonModule, DialogModule, FormUserComponent, LoginComponent],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.sass',
})
export class ModalLoginComponent {
  visible = false;
  showRegister = false;
  serviceModal = inject(ModalService);
  imageHotelService = inject(ImageHotelsService);
  imageHotel: string | null = null;
  ngOnInit() {
    this.serviceModal.modalLogin$.subscribe((visible: boolean) => {
      this.visible = visible;
    });

    this.imageHotelService.getRoomsImages('1', '4').subscribe((response) => {
      if (response) {
        this.imageHotel = response[0].webformatURL;
      }
    });
  }

  setShowRegister() {
    this.showRegister = !this.showRegister;
  }

  ngOnDestroy() {
    this.serviceModal.setStateLogin(false);
  }
}
