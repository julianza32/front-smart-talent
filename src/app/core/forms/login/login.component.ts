import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  imports: [ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
  standalone: true,
})
export class LoginComponent {
  constructor(private readonly userService: UserServiceService) { }
  showDialog(){

  }


  login() {
    this.userService.login({email: 'pedro@email.ed.com', password:'123'}).subscribe((response) => {
      console.log(response);
    });
  }
}
