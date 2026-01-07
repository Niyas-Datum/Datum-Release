import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'coreApp',
    loadChildren: () => import('coreApp/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'loginApp',
    loadChildren: () => import('loginApp/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'loginApp',
    loadChildren: () => import('loginApp/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
