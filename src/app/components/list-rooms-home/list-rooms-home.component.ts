import { Component, inject } from '@angular/core';
import { ContainerInfoRoomsComponent } from '../container-info-rooms/container-info-rooms.component';
import { RoomsServiceService } from '../../core/services/rooms-service.service';
import { IRooms } from '../../core/interfaces/room.interface';
import { HotelsServiceService } from '../../core/services/hotels-service.service';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { IResponseHits } from '../../core/interfaces/response_images.interface';
import { ImageHotelsService } from '../../core/services/image-hotels.service';

@Component({
  selector: 'app-list-rooms-home',
  imports: [ContainerInfoRoomsComponent, LoadingComponent, CommonModule],
  templateUrl: './list-rooms-home.component.html',
  styleUrl: './list-rooms-home.component.sass',
})
export class ListRoomsHomeComponent {
  service = inject(RoomsServiceService);
  serviceHotel = inject(HotelsServiceService);
  serviceImage = inject(ImageHotelsService);
  idHotel = '';
  listRooms: IRooms[] = [];
  listImages: IResponseHits[] = [];
loading = false;
  ngOnInit () {
    this.serviceHotel.hotel$.subscribe((id) => {
      this.idHotel = id.id;
      this.getRooms(id.id);
    });
  }
  getRooms(idHotel: string) {
    this.loading = true;
    this.service.getRoomsByStatus(idHotel).subscribe((rooms:IRooms[]) => {
      this.listRooms = rooms;
    });

    this.serviceImage.getRoomsImages(idHotel, this.listRooms.length < 3 ? '5' : this.listRooms.length.toString()).subscribe((response) => {
      this.listImages = response;
      this.loading = false;

    });
  }
}
