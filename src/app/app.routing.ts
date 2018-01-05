import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
