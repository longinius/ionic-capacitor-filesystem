import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { enableProdMode, importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { RouteReuseStrategy } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
  ],
});
