import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ContrastApplierService } from './services/global-service/contrast-applier/contrast-applier-service';
import { CompactApplierService } from './services/global-service/compact-applier/compact-applier-service';
import { DarkApplierService } from './services/global-service/dark-applier/dark-applier-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      inject(CompactApplierService);
      inject(ContrastApplierService);
      inject(DarkApplierService);
    }),
  ],
};
