import { Routes } from '@angular/router';
import { SolutionDetailComponent } from './pages/solution-detail/solution-detail.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';

export const routes: Routes = [
  {
    path: 'soluciones/:slug',
    component: SolutionDetailComponent,
    title: 'Solución | Hamster Software'
  },
  {
    path: 'servicios/:slug',
    component: ServiceDetailComponent,
    title: 'Servicio | Hamster Software'
  }
];
