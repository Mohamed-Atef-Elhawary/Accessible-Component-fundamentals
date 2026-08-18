import { Component } from '@angular/core';
import { LucideAngularModule, WandSparkles } from 'lucide-angular';

@Component({
  selector: 'app-modal-dialog-header-component',
  imports: [LucideAngularModule],
  templateUrl: './modal-dialog-header-component.html',
  styleUrl: './modal-dialog-header-component.css',
})
export class ModalDialogHeaderComponent {
  aiIcon = WandSparkles;
}
