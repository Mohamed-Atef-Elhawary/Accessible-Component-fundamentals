import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import {
  DensitySetting,
  ToggleSettingViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { ToggleSettingsListComponent } from '../../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';
import { DensitySettingsStore } from '../../../../../../stores/setting-stores/settings/toggle/density/density-settings-store';
import { DENSITY_SETTINGS_METADATA } from '../../../../../../stores/setting-stores/settings/toggle/density/density-constants';
import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-layout-density-settings-component',
  styleUrl: './layout-density-settings-component.css',
  templateUrl: './layout-density-settings-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDensitySettingsComponent {
  densityStore = inject(DensitySettingsStore);

  private computedSettings: Signal<ToggleSettingViewData<DensitySetting>>[] = Object.values(
    DENSITY_SETTINGS_METADATA,
  ).map((option) => {
    return computed<ToggleSettingViewData<DensitySetting>>(() => {
      const checked = this.densityStore.draftedState[option.settingName]();
      const feedbackData: FeedbackData = {
        feedbackType: option.settingName,
        payload: checked,
      };
      return {
        ...option,
        checked,
        feedbackData,
      };
    });
  });

  densityViewData = computed<ToggleSettingViewData<DensitySetting>[]>(() => {
    return this.computedSettings.map((setting) => setting());
  });

  compactSettingsToggler(settingName: DensitySetting) {
    this.densityStore.toggleSettingState(settingName);
  }
}
