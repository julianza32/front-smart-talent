import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IGuests } from '../../interfaces/guests.interface';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';


@Component({
  selector: 'app-form-guest',
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    CalendarModule,

    SelectModule
  ],
  templateUrl: './form-guest.component.html',
  styleUrl: './form-guest.component.sass',
})
export class FormGuestComponent {
  private formBuilder = inject(FormBuilder);
  @Output() addGuest = new EventEmitter<IGuests>();
  options = [
    { label: 'CC', value: 'CC' },
    { label: 'TI', value: 'TI' },
    { label: 'DNI', value: 'DNI' },
    { label: 'Pasaporte', value: 'Pasaporte' },
  ];
public maxDate = new Date();
public minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100));
formGuest: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    birthDate: [null, Validators.required],
    documentType: ['', Validators.required],
    documentNumber: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitForm() {
    if (this.formGuest.valid) {
      this.addGuest.emit(this.formGuest.value);
      this.formGuest.reset();
    }
  }
}
