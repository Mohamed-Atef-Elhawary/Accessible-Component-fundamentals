import {
  Component,
  ChangeDetectionStrategy,
  output,
  viewChild,
  afterNextRender,
  ElementRef,
  input,
  computed,
  effect,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderData } from '../../interfaces/header-data';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';

@Component({
  selector: 'app-header-component',
  imports: [FontAwesomeModule],
  templateUrl: './header-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  headerData = input.required<HeaderData>();
  btn = viewChild<ElementRef>('btn');
  actionClicked = output<void>();
  constructor(private userModalStateService: UserModalStateService) {
    afterNextRender(() => {
      this.btn()?.nativeElement.focus();
    });
    effect(() => {
      if (!userModalStateService.isModalOpen()) {
        if (this.userModalStateService.shouldFocusPermanentAddButton()) {
          this.btn()?.nativeElement.focus();
        }
      }
    });
  }
}
