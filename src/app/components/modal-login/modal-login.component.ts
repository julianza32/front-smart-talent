import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-modal-login',
  imports: [CommonModule, DialogModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.sass'
})
export class ModalLoginComponent {
  visible = false;

  serviceModal = inject(ModalService);
  ngOnInit() {
    this.serviceModal.modalLogin$.subscribe((visible: boolean) => {
      this.visible = visible;
    });
  }

  ngOnDestroy() {
    this.serviceModal.setStateLogin(false);
  }
}
