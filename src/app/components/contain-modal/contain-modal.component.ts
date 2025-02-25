import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-contain-modal',
  standalone: true,
  templateUrl: './contain-modal.component.html',
  imports: [CommonModule, DialogModule],
  styleUrls: ['./contain-modal.component.sass'],
})
export class ContainModalComponent {
  visible = false;

  serviceModal = inject(ModalService);
  ngOnInit() {
    this.serviceModal.modal$.subscribe((visible: boolean) => {
      this.visible = visible;
    });
  }

  ngOnDestroy() {
    this.serviceModal.setState(false);
  }
}
