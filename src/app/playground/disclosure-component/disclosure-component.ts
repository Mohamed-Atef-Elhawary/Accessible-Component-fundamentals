import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderData } from '../../interfaces/header';
import { HeaderComponent } from '../../core/header-component/header-component';

@Component({
  selector: 'app-disclosure-component',
  imports: [HeaderComponent],
  templateUrl: './disclosure-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './disclosure-component.css',
})
export class DisclosureComponent {
  headerData: HeaderData = {
    title: ' User Settings & Disclosure Studio',
    description: 'Manage preferences and test accessible panel interactions.',
    buttonTitle: ' Save Settings',
  };
  saveSettings() {
    console.log('save');
  }
}
