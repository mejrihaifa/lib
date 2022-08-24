import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'flights',
      loadChildren: () =>
        loadRemoteModule({
           // We don't need this anymore b/c its loaded upfront now
           // remoteEntry: 'http://localhost:3000/remoteEntry.js',
          //type: 'manifest',
          //type: 'module',
          //remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'mfe1',
          exposedModule: './Module'
    }).then((m) => m.FlightsModule)

//import('mfe1/Module').then(m =>  m.FlightsModule)
    },
];
