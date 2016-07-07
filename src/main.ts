import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyAd1FggQh-cpIRcUqHg7RQPrTCj5g-EzSc",
    authDomain: "fir-2practice.firebaseapp.com",
    databaseURL: "https://fir-2practice.firebaseio.com",
    storageBucket: "gs://fir-2practice.appspot.com",
  })
]);

