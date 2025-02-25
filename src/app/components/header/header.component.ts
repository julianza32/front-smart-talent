import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../core/interfaces/user.interface';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent implements OnInit {
  hidden = false;
  modalService = inject(ModalService);

  sessionSignal = signal<IUser | undefined>(undefined);

  toggleNav() {
    this.hidden = true;
  }

  showModal() {
    this.modalService.setStateLogin(true);
  }

  getSession(): IUser | null {
    const storedSession = localStorage.getItem('session');
    return storedSession ? JSON.parse(storedSession) : null;
  }

  ngOnInit() {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      this.sessionSignal.set(JSON.parse(storedSession));
    }
  }

  closeSesion() {
    localStorage.removeItem('session');
    this.sessionSignal.set(undefined);
  }
}
