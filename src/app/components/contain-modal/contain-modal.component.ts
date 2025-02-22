import { Component, Input, Type, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-contain-modal',
  standalone: true,
  templateUrl: './contain-modal.component.html',
  imports: [CommonModule, DialogModule],
  styleUrls: ['./contain-modal.component.sass'],
})
export class ContainModalComponent  {
  @Input() visible = false;


}
