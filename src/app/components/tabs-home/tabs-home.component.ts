import { Component, inject, OnInit } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ListHotelsHomeComponent } from '../list-hotels-home/list-hotels-home.component';
import { ListRoomsHomeComponent } from '../list-rooms-home/list-rooms-home.component';
import { HotelsServiceService } from '../../core/services/hotels-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-home',
  imports: [
    CommonModule,
    TabsModule,
    ListHotelsHomeComponent,
    ListRoomsHomeComponent,
  ],
  templateUrl: './tabs-home.component.html',
  styleUrl: './tabs-home.component.sass',
})
export class TabsHomeComponent {
  tab = '0';

  hotelService = inject(HotelsServiceService);
  constructor() {
    this.hotelService.tab$.subscribe((id) => {
      console.log('tab', id);

      this.tab = id;
    });
  }
}
