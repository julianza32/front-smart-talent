import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserServiceService } from '../../services/user-service.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ILogin, IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
  standalone: true,
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  @Output() hidden = new EventEmitter<boolean>();
  constructor(private readonly userService: UserServiceService) {}
  showDialog() {
    this.hidden.emit(false);
  }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    this.userService
      .login(this.loginForm.getRawValue() as ILogin)
      .subscribe((response: IUser) => {
        if (response.id) {
          this.showDialog();
          this.loginForm.reset();
          localStorage.setItem('Session', JSON.stringify(response));


        }
      });
  }
}
