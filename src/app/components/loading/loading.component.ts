import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-loading',
  imports: [SkeletonModule, CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.sass'
})
export class LoadingComponent {

}
