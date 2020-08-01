import { defineCustomElements } from '@nxc/ui/form/custom/loader';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // customElements.define('nxc-input', NxcInput);
    defineCustomElements()
  })
  .catch((err) => console.error(err));
