import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-admin',
  imports: [RouterModule, MenubarModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.sass',
})
export class AdminComponent {
  router = inject(Router);
  items = [
    {
      label: 'Usuarios',
      icon: 'pi pi-user',
      command: () => {
        this.router.navigate(['admin/users']);
      },
    },
    {
      label: 'Hoteles',
      icon: 'pi pi-building',
      command: () => {
        this.router.navigate(['admin/hotels']);
      },
    },
    {
      label: 'Habitaciones',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['admin/rooms']);
      },
    },
    {
      label: 'Reservas',
      icon: 'pi pi-receipt',
      command: () => {
        this.router.navigate(['admin/reservations']);
      },
    },

    {
      label: 'Salir',
      icon: 'pi pi-sign-out',
      command: () => {
        localStorage.removeItem('session');
        this.router.navigate(['']);
      },
    }
  ];
}
