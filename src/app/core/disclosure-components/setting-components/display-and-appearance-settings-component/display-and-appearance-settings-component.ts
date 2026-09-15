import { Component, signal } from '@angular/core';
import { PreferredTheme } from '../../../../types/generalTypes';
import { faDisplay, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Appearance } from '../../../../interfaces/disclosure-settings';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-display-and-appearance-settings-component',
  styleUrl: './display-and-appearance-settings-component.css',
  templateUrl: './display-and-appearance-settings-component.html',
})
export class DisplayAndAppearanceSettingsComponent {
  appearance: Appearance[] = [
    {
      id: crypto.randomUUID(),
      name: 'preferredTheme',
      value: 'system',
      icon: faDisplay,
      checked: signal<boolean>(true),
    },
    {
      id: crypto.randomUUID(),
      name: 'preferredTheme',
      value: 'light',
      icon: faSun,
      checked: signal<boolean>(false),
    },
    {
      id: crypto.randomUUID(),
      name: 'preferredTheme',
      value: 'dark',
      icon: faMoon,
      checked: signal<boolean>(false),
    },
  ];
  preferredTheme = signal<PreferredTheme>('system');
  compactMode = signal<boolean>(false);
  toggleCompactMode() {
    this.compactMode.update((s) => !s);
  }

  onChange() {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhh');
  }
}
