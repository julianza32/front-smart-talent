import { Component, inject, Input } from '@angular/core';
import { IHotels } from '../../core/interfaces/hotels.interface';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HotelsServiceService } from '../../core/services/hotels-service.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FilterHotelsPipe } from '../../core/utils/filter-hotels.pipe';
import { IResponseHits } from '../../core/interfaces/response_images.interface';
import { SkeletonModule } from 'primeng/skeleton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-container-info-hotels',
  imports: [
    CommonModule,
    FloatLabelModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    FilterHotelsPipe,
    SkeletonModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './container-info-hotels.component.html',
  styleUrl: './container-info-hotels.component.sass',
})
export class ContainerInfoHotelsComponent {
  constructor(private sanitization: DomSanitizer) {}
  @Input() listHotels: IHotels[] = [];
  @Input() listImages: IResponseHits[] = [];
  search = '';
  hotelService = inject(HotelsServiceService);

  selectHotel(hotel: IHotels) {
    this.hotelService.setHotel(hotel);
    this.hotelService.setTab('1');
  }

  filterHotel() {
    this.listHotels = this.listHotels.filter(
      (hotel) =>
        hotel.name.includes(this.search) ||
        hotel.location.includes(this.search) ||
        hotel.details.includes(this.search)
    );
  }

  onChangeSearh(text: string) {
    this.search = text;
    this.filterHotel();
  }
}
