import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SignupComponent,
  LoginComponent
} from './components';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);