import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-modal-reservation',
  imports: [CommonModule, DialogModule],
  templateUrl: './modal-reservation.component.html',
  styleUrl: './modal-reservation.component.sass',
})
export class ModalReservationComponent {
  visible = false;
  serviceModal = inject(ModalService);

  ngOnInit() {
    this.serviceModal.modalReservation$.subscribe((visible) => {
      this.visible = visible;
    });
  }
  ngOnDestroy() {
    this.serviceModal.setStateReservation(false);
  }
}
