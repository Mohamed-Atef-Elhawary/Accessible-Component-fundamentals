import { Routes } from '@angular/router';
import { RadioGroupSettingsComponent } from './core/disclosure-components/setting-components/shared/radio-group/radio-group-settings-component/radio-group-settings-component';
import { SettingPrivacyFeedbackComponent } from './core/disclosure-components/setting-components/shared/feedbacks/components/setting-privacy-feedback-component/setting-privacy-feedback-component';

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
  { path: 'pf', component: SettingPrivacyFeedbackComponent },
];
