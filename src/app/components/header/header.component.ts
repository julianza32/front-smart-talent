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
import { SesionService } from '../../core/services/sesion.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  hidden = false;
  modalService = inject(ModalService);
  sesionService = inject(SesionService);
  sessionSignal = signal<IUser | undefined>(undefined);



  
  ngOnDestroy() {
    window.removeEventListener('storage', this.syncSession);
  }
  
  loadSession() {
    const storedSession = localStorage.getItem('session');
    this.sessionSignal.set(storedSession ? JSON.parse(storedSession) : undefined);
  }
  
  syncSession = () => {
    this.loadSession();
  };
  
  toggleNav() {
    this.hidden = true;
  }

  showModal() {
    this.modalService.setStateLogin(true);
  }



  
  ngOnInit() {
        this.sesionService.session$.subscribe(user => {
      this.sessionSignal.set(user);
    });
  }

  closeSesion() {
    this.sesionService.clearSession();
  }

}
