import { Component, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { PrivacyOption } from '../../../../interfaces/disclosure/privacy-disclosure-settings';
import { privacySettingsStore } from '../../../../stors/setting-stores/privacy-settings-store/privacy-settings-store';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-privacy-settings-component',
  styleUrl: './privacy-settings-component.css',
  templateUrl: './privacy-settings-component.html',
  providers: [privacySettingsStore],
})
export class PrivacySettingsComponent {
  circleDot = faCircleDot;
  privacyList: PrivacyOption[] = ['public', 'friends', 'private'];
  selectedOption = computed<PrivacyOption>(() => this.privacySettingsStore.selectedOption());
  privacySettingsStore = inject(privacySettingsStore);

  uodatePrivacyState(selectedOption: PrivacyOption) {
    this.privacySettingsStore.updatePrivacyState({ selectedOption });
  }
}
