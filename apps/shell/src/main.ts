/*
import('./bootstrap')
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/

/**/
//import { loadManifest } from '@angular-architects/module-federation';

//loadManifest("/assets/mf.manifest.json")


// import Amplify from 'aws-amplify';
// import awsconfig from '../../../src/aws-exports';

import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('https://master.dyxtvwg8nguhc.amplifyapp.com/remoteEntry.js', 'mfe1')
  //loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')
])

  .catch(err => console.error('Error loading remote entries', err))
 .then(() => import('./bootstrap'))
 .catch(err => console.error(err));

//Amplify.configure(awsconfig);
