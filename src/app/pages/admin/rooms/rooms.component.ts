import { Component, inject } from '@angular/core';
import { RoomsServiceService } from '../../../core/services/rooms-service.service';
import { ModalService } from '../../../core/services/modal.service';
import { IRooms } from '../../../core/interfaces/room.interface';
import { TableModule } from 'primeng/table';
import { ContainModalComponent } from '../../../components/contain-modal/contain-modal.component';
import { FormUserComponent } from '../../../core/forms/form-user/form-user.component';
import { ButtonModule } from 'primeng/button';
import { FormRoomComponent } from "../../../core/forms/form-room/form-room.component";
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { HotelsServiceService } from '../../../core/services/hotels-service.service';

@Component({
  selector: 'app-rooms',
  imports: [
    TableModule,
    ContainModalComponent,
    ButtonModule,
    FormRoomComponent,
    SelectModule,
    FormsModule,
    FloatLabelModule
],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.sass',
})
export class RoomsComponent {
  roomService = inject(RoomsServiceService);
  hotelsService = inject(HotelsServiceService);
  modalService = inject(ModalService);
  listRooms: IRooms[] = [];
  loading: boolean = false;
  room: IRooms | null = null;
  id_hotel: string = '';
  listHotels: any[] = [];

  ngOnInit() {
    this.getHotels();
  }

  editRoom(room: IRooms) {
    this.room = room;
    this.modalService.setState(true);
  }

  deleteRoom(room: IRooms) {
    this.roomService.deleteRoom(room.id ?? '').subscribe((resp) => {
      if (resp) {
        this.getRooms();
      } else {
        console.log('Error');
      }
    });
  }

  getRooms() {
    this.loading = true;
    this.roomService.getRoomsByHotel(this.id_hotel).subscribe((response) => {
      this.listRooms = response;
      this.loading = false;
    });
  }

  getHotels(){
    this.hotelsService.getHotels().subscribe((response) => {
      this.listHotels = response.map(hotel => ({'label': hotel.name, 'value': hotel.id}));
    });
  }

  refresh() {
    this.getRooms();
  }

  createRoom() {
    this.room = null;
    this.modalService.setState(true);
  }
}
