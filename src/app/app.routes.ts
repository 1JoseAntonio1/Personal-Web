import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

export const APP_ROUTING =  RouterModule.forRoot(routes, config);
