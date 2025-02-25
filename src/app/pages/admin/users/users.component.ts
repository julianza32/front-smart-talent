import { Component, inject } from '@angular/core';
import { UserServiceService } from '../../../core/services/user-service.service';
import { IUser } from '../../../core/interfaces/user.interface';
import { TableModule } from 'primeng/table';
import { ContainModalComponent } from '../../../components/contain-modal/contain-modal.component';
import { FormUserComponent } from '../../../core/forms/form-user/form-user.component';
import { ModalService } from '../../../core/services/modal.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-users',
  imports: [
    TableModule,
    ContainModalComponent,
    FormUserComponent,
    ButtonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass',
})
export class UsersComponent {
  userService = inject(UserServiceService);
  modalService = inject(ModalService);
  listUsers: IUser[] = [];
  loading: boolean = false;
  user: IUser | null = null;
  ngOnInit() {
    this.getUsers();
  }
  editUser(user: IUser) {
    this.user = user;
    this.modalService.setState(true);
  }
  deleteUser(user: IUser) {
    this.userService.deleteUser(user.id ?? '').subscribe((resp) => {
      if (resp) {
        this.getUsers();
      } else {
        console.log('Error');
      }
    });
  }
  getUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe((response) => {
      this.listUsers = response;
      this.loading = false;
    });
  }
  refresh() {
    this.getUsers();
  }

  createUser() {
    this.user = null;
    this.modalService.setState(true);
  }
}
