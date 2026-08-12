import { Component } from '@angular/core';
import { LucideAngularModule, WandSparkles } from 'lucide-angular';
@Component({
  selector: 'app-modal-dialog-component',
  imports: [LucideAngularModule],
  templateUrl: './modal-dialog-component.html',
  styleUrl: './modal-dialog-component.css',
})
export class ModalDialogComponent {
  aiIcon = WandSparkles;
}
