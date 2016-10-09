import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './components/app.component/app.component';
import { FirstPageComponent }   from './components/first-page.component/first-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FirstPageComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);