import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { RoomsServiceService } from '../../services/rooms-service.service';
import { IRooms } from '../../interfaces/room.interface';
import { SelectModule } from 'primeng/select';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-form-room',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './form-room.component.html',
  styleUrl: './form-room.component.sass',
})
export class FormRoomComponent {
  private formBuilder = inject(FormBuilder);
  private roomService = inject(RoomsServiceService);
  private modalService = inject(ModalService);

  @Input() room: IRooms | null = null;
  @Input() id_hotel: string = '';
  @Output() saveRoom = new EventEmitter<boolean>();
  formRoom: FormGroup = this.formBuilder.group({
    type: ['', Validators.required],
    base_cost: [0, [Validators.required, Validators.min(1)]],
    taxes: [0, [Validators.required, Validators.min(0)]],
    location: ['', Validators.required],
    status: ['', Validators.required],
    number_room: [0, [Validators.required, Validators.min(1)]],
  });

  typeOptions = ['Sencilla', 'Doble', 'Triple'];
  statusOptions = ['Habilitada', 'Deshabilitada'];

  ngOnChanges() {
    if (this.room) {
      this.formRoom.patchValue({
        type: this.room.type,
        base_cost: this.room.base_cost,
        taxes: this.room.taxes,
        location: this.room.location,
        status: this.room.status,
        number_room: this.room.number_room,
      });
    }
  }
  createRoom() {
    if (this.formRoom.valid) {
      const room = {
        ...this.formRoom.value,
        id_hotel: this.id_hotel,
      };
      this.roomService
        .createRoom(room as IRooms)
        .subscribe((response: IRooms) => {
          if (response) {
            this.saveRoom.emit(true);
            this.modalService.setState(false);
          }
        });
    }
  }

  editRoom() {
    if (this.formRoom.valid) {
      const room = {
        ...this.formRoom.value,
        id: this.room?.id,
      };
      this.roomService
        .updateRoom(room as IRooms)
        .subscribe((response: IRooms) => {
          if (response) {
            this.saveRoom.emit(true);
            this.modalService.setState(false);

          }
        });
    }
  }
}
