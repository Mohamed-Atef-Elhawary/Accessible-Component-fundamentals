import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartColumn,
  faListCheck,
  faPictureInPicture,
  faFolderOpen,
  faWandMagicSparkles,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidebar-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  navigationLinks: { key: string; value: string; icon: IconDefinition }[] = [
    {
      key: 'dashboard',
      value: 'Dashboard',
      icon: faChartColumn,
    },
    {
      key: 'disclosure',
      value: 'Disclosure',
      icon: faListCheck,
    },
    {
      key: 'modal-dialog',
      value: 'Dialog',
      icon: faPictureInPicture,
    },
    {
      key: 'tabs',
      value: 'Tabs',
      icon: faFolderOpen,
    },
    {
      key: 'chat',
      value: 'Chats',
      icon: faWandMagicSparkles,
    },
  ];
}
