import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'my-reservations',
    loadComponent: () =>
      import('./pages/my-reservations/my-reservations.component').then(
        (m) => m.MyReservationsComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/admin/users/users.component').then(
            (m) => m.UsersComponent
          ),
      },
      {
        path: 'hotels',
        loadComponent: () =>
          import('./pages/admin/hotels/hotels.component').then(
            (m) => m.HotelsComponent
          ),
      },
      {
        path: 'rooms',
        loadComponent: () =>
          import('./pages/admin/rooms/rooms.component').then(
            (m) => m.RoomsComponent
          ),
      },
      {
        path: 'reservations',
        loadComponent: () =>
          import('./pages/admin/reservations/reservations.component').then(
            (m) => m.ReservationsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'reserva/:idreserva',
    loadComponent: () =>
      import('./pages/reservation/reservation.component').then(
        (m) => m.ReservationComponent
      ),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
