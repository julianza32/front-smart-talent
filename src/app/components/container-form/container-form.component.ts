import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-container-form',
  imports: [PanelModule],
  templateUrl: './container-form.component.html',
  styleUrl: './container-form.component.sass'
})
export class ContainerFormComponent {

  @Input() formName: string = '';
}
