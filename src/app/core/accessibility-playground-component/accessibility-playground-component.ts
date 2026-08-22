import { Component, signal } from '@angular/core';
import { Check, LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-accessibility-playground-component',
  imports: [LucideAngularModule],
  templateUrl: './accessibility-playground-component.html',
  styleUrl: './accessibility-playground-component.css',
})
export class AccessibilityPlaygroundComponent {
  check = Check;
  showBackdropIcon = signal<boolean>(false);
  print() {
    this.showBackdropIcon.update((v) => !v);
  }
}
