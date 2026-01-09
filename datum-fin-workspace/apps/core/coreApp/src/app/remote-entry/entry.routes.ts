import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntry, 

    children: [
        {  
    path: 'general',
    loadChildren: () => import('GeneralApp/Routes').then((m) => m!.remoteRoutes),
  },
    ]
}];
