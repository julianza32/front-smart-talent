import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-form-user',
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.sass',
})
export class FormUserComponent {
  private formBuilder = inject(FormBuilder);
  private userService = inject(UserServiceService);
  private modalService = inject(ModalService);
  @Input() user: IUser | null = null;
  @Input() agent: boolean = false;
  @Output() saveUser = new EventEmitter<boolean>();

  formUser = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password_hash: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(6)]],
  });
  ngOnChanges() {
    if (this.user) {
      this.formUser.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
      });
    }
  }

  createUser() {
    if (this.formUser.valid) {
      const user = {
        ...this.formUser.value,
        type: this.agent?'Agente': 'Viajero',
      };
      this.userService.create(user as IUser).subscribe((response: IUser) => {
        this.saveUser.emit(true);
      });
    }
  }

  editUser() {
    if (this.formUser.valid) {
      const user = {
        ...this.formUser.value,
        id: this.user?.id,
      };
      this.userService.editUser(user as IUser).subscribe((response: IUser) => {
        if (response) {
          this.modalService.setState(false);
          this.saveUser.emit(true);
        }
      });
    }
  }
}
