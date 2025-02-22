import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  hidden: boolean = false;
  @Output() openModal = new EventEmitter<boolean>();

  toggleNav() {
    this.hidden = !this.hidden;
  }

  showModal() {
    this.openModal.emit(true);
  }
}
