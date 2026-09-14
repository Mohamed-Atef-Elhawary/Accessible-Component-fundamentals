import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

@Component({
  imports: [ReactiveFormsModule, FontAwesomeModule],
  selector: 'app-privacy-settings-component',
  styleUrl: './privacy-settings-component.css',
  templateUrl: './privacy-settings-component.html',
})
export class PrivacySettingsComponent {
  privacyValue: FormControl = new FormControl('initial');
  circleDot = faCircleDot;

  logVal(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
}
