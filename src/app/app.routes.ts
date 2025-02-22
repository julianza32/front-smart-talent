import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
