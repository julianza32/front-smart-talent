import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserServiceService } from '../../services/user-service.service';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ILogin, IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { ImageHotelsService } from '../../services/image-hotels.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
  standalone: true,
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserServiceService);
  private modalService = inject(ModalService);  
  private sessionService = inject(SesionService);
  @Output() openRegister = new EventEmitter<void>();
  
  constructor() {}


  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  login() {
    this.userService
      .login(this.loginForm.getRawValue() as ILogin)
      .subscribe((response: IUser) => {
        if (response.id) {
          this.sessionService.setSession(response);

          localStorage.setItem('session', JSON.stringify(response));

          if (response.type.toString() === 'Agente') {
            this.router.navigate(['admin']);
          }
          this.cancel();
        }
      });
  }
  cancel() {
    this.modalService.setStateLogin(false);
    this.loginForm.reset();
  }

  openRegisterForm() {
    this.openRegister.emit();
  }
}
