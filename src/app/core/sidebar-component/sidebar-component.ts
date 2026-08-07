import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  LayoutDashboard,
  ListCollapse,
  AppWindow,
  LayoutPanelTop,
  Sparkles,
  LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  navigationLinks: { key: string; value: string; icon: LucideIconData }[] = [
    {
      key: 'dashboard',
      value: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      key: 'disclosure',
      value: 'Disclosure',
      icon: ListCollapse,
    },
    {
      key: 'modal-dialog',
      value: 'Dialog',
      icon: AppWindow,
    },
    {
      key: 'tabs',
      value: 'Tabs',
      icon: LayoutPanelTop,
    },
    {
      key: 'chat',
      value: 'Chats',
      icon: Sparkles,
    },
  ];
}
