import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './components';

const MainPageRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

export const MainPageRouting = RouterModule.forChild(MainPageRoutes);
