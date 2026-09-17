import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import localeEnGb from '@angular/common/locales/en-GB';
import localeArEg from '@angular/common/locales/ar-EG';
registerLocaleData(localeEnGb, 'en-GB');
registerLocaleData(localeArEg, 'ar-EG');
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
