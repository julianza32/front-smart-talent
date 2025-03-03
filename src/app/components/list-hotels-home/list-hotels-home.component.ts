import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ContainerInfoHotelsComponent } from '../container-info-hotels/container-info-hotels.component';
import { HotelsServiceService } from '../../core/services/hotels-service.service';
import { IHotels } from '../../core/interfaces/hotels.interface';
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';
import { ImageHotelsService } from '../../core/services/image-hotels.service';
import { IResponseHits } from '../../core/interfaces/response_images.interface';

@Component({
  selector: 'app-list-hotels-home',
  imports: [ContainerInfoHotelsComponent, LoadingComponent,CommonModule],
  templateUrl: './list-hotels-home.component.html',
  styleUrl: './list-hotels-home.component.sass',
})
export class ListHotelsHomeComponent implements OnInit {

  listHotels: IHotels[]  = [];
  loading = true;
  @Output() changeTab = new EventEmitter<string>(); 
  hotelService = inject(HotelsServiceService);
  imageService = inject(ImageHotelsService);
  listImages: IResponseHits[] = [];
  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.loading = true
    this.hotelService.getHotels().subscribe((hotels: IHotels[]) => {
      this.listHotels = hotels;
    });
    this.imageService.getHotelsImages('1', this.listHotels.length<3 ? '5': this.listHotels.length.toString()).subscribe((response) => {
      this.listImages = response;
      this.loading = false;
    
    });

  }



}
