import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./public/layout/public-layout/public-layout.component'),
    children: [
      {
        path: 'landing',
        loadComponent: () => import('./public/components/landing/landing.component')
      },
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: 'app',
    loadComponent: () => import('./private/layout/private-layout/private-layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./private/components/dashboard/dashboard.component')
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
