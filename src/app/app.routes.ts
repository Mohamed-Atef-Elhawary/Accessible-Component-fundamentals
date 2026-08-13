import { Routes } from '@angular/router';
import { UsersListComponent } from './core/users-list-component/users-list-component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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

  { path: 'list', component: UsersListComponent },
];
