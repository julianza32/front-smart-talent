import { Component, inject } from '@angular/core';
import { IHotels } from '../../../core/interfaces/hotels.interface';
import { ModalService } from '../../../core/services/modal.service';
import { HotelsServiceService } from '../../../core/services/hotels-service.service';
import { TableModule } from 'primeng/table';
import { ContainModalComponent } from '../../../components/contain-modal/contain-modal.component';
import { FormHotelComponent } from '../../../core/forms/form-hotel/form-hotel.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hotels',
  imports: [
    TableModule,
    ContainModalComponent,
    FormHotelComponent,
    ButtonModule,
  ],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.sass',
})
export class HotelsComponent {
  listHotels: IHotels[] = [];
  hotel: IHotels | null = null;
  loading: boolean = false;
  modalService = inject(ModalService);
  hotelService = inject(HotelsServiceService);

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.loading = true;
    this.hotelService.getHotels().subscribe((response) => {
      this.listHotels = response;
      this.loading = false;
    });
  }
  editHotel(hotel: IHotels) {
    this.hotel = hotel as IHotels;
    this.modalService.setState(true);
  }
  createHotel() {
    this.hotel = null;
    this.modalService.setState(true);
  }
  deleteHotel(hotel: IHotels) {
    this.hotelService.deleteHotel(hotel.id ?? '').subscribe((resp) => {
      if (resp) {
        this.getHotels();
      } else {
        console.log('Error');
      }
    });
  }
  toggleActive(hotel: IHotels) {
    
    this.hotelService
      .activateHotel(hotel.id ?? '',   hotel.is_active === 'true' ? 'false':'true' )
      .subscribe((resp) => {
        this.getHotels();
      });
  }
  refresh() {
    this.getHotels();
  }
}
