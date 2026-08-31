import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/sidebar-component/sidebar-component';
import { UserModalStateService } from './services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { AccessibilityStateService } from './services/modal-dialog-services/accessibility-state/accessibility-state-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AccessibleComponentFundamentals');
  lockScrollOnopendModal = computed<boolean>(
    () => this.accessibilityStateService.lockScroll() && this.userModalStateService.isModalOpen(),
  );
  constructor(
    private userModalStateService: UserModalStateService,
    private accessibilityStateService: AccessibilityStateService,
  ) {}
}
