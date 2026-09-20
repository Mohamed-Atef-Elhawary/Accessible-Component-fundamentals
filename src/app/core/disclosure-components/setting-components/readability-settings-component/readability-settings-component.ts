import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-readability-settings-component',
  styleUrl: './readability-settings-component.css',
  templateUrl: './readability-settings-component.html',
  host: { class: 'block' },
})
export class ReadabilitySettingsComponent {
  rangeValue = signal<number>(10);

  onInput(event: InputEvent) {
    const value: number = Number((event.target as HTMLInputElement).value);
    this.rangeValue.set(value);
  }
}
