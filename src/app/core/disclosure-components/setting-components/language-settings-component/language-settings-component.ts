import { Component, signal } from '@angular/core';
import { Language } from '../../../../interfaces/disclosure-settings';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-language-settings-component',
  styleUrl: './language-settings-component.css',
  templateUrl: './language-settings-component.html',
})
export class LanguageSettingsComponent {
  languages: Language[] = [
    {
      id: crypto.randomUUID(),
      name: 'language',
      value: 'arabic',
      checked: signal<boolean>(true),
    },
    {
      id: crypto.randomUUID(),
      name: 'language',
      value: 'english',
      checked: signal<boolean>(true),
    },
  ];
  getLang(lang: string): string {
    if (lang === 'arabic') {
      return 'العربية';
    }
    return `${lang[0].toUpperCase()}${lang.slice(1)}`;
  }
  getDate(): Date {
    return new Date();
  }
}
