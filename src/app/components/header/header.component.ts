import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../core/interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  hidden: boolean = false;
  @Output() openModal = new EventEmitter<boolean>();
  sesion: IUser | undefined;

  toggleNav() {
    this.hidden = true;
  }
  showModal() {
    this.openModal.emit(true);
  }
  ngAfterViewInit() {
    this.sesion = JSON.parse(localStorage.getItem('Session') || '{}');
  }
  closeSesion(){
    localStorage.removeItem('Session');
    this.sesion = undefined;
  }
}
