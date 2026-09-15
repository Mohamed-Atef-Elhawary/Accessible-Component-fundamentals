import { Routes } from '@angular/router';

import { DisclosureSettingsSectionsComponent } from './core/disclosure-components/disclosure-settings-sections-component/disclosure-settings-sections-component';
import { DisplayAndAppearanceSettingsComponent } from './core/disclosure-components/setting-components/display-and-appearance-settings-component/display-and-appearance-settings-component';
import { LanguageSettingsComponent } from './core/disclosure-components/setting-components/language-settings-component/language-settings-component';

export const routes: Routes = [
  { path: '', redirectTo: 'modal-dialog', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./playground/dashboard-component/dashboard-component').then(
        (c) => c.DashboardComponent,
      ),
  },
  {
    path: 'disclosure',
    loadComponent: () =>
      import('./playground/disclosure-component/disclosure-component').then(
        (c) => c.DisclosureComponent,
      ),
  },
  {
    path: 'modal-dialog',
    loadComponent: () =>
      import('./playground/modal-dialog-component/modal-dialog-component').then(
        (c) => c.ModalDialogComponent,
      ),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./playground/tabs-component/tabs-component').then((c) => c.TabsComponent),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./playground/ai-integration/ai-integration').then((c) => c.AiIntegration),
  },
  ///////////////////////////////////////////components
  { path: 'lang', component: LanguageSettingsComponent },
  { path: 'settings', component: DisclosureSettingsSectionsComponent },
];
