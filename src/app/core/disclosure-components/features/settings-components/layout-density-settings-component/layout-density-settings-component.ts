import { Component, computed, inject } from '@angular/core';
import {
  DensitySettingName,
  ToggleSettingMetaData,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import { ToggleSettingsListComponent } from '../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';
import { COMPACT_SETTINGS_METADATA } from '../../../../../stores/setting-stores/settings/toggle-settings-stores/density/density-constants';
import { DensitySettingsStore } from '../../../../../stores/setting-stores/settings/toggle-settings-stores/density/density-settings-store';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-layout-density-settings-component',
  styleUrl: './layout-density-settings-component.css',
  templateUrl: './layout-density-settings-component.html',
})
export class LayoutDensitySettingsComponent {
  densitySettingsStore = inject(DensitySettingsStore);
  compactSettings = computed<ToggleSettingMetaData<DensitySettingName>[]>(() => {
    return [
      {
        checked: this.densitySettingsStore.draftedState.compact(),
        ...COMPACT_SETTINGS_METADATA.compact,
        feedbackData: {
          feedbackType: 'compact',
          payload: this.densitySettingsStore.draftedState.compact(),
        },
      },
    ];
  });
  compactSettingsToggler(settingName: string) {
    if (this.isSettingName<DensitySettingName>(settingName, ['compact'])) {
      this.densitySettingsStore.toggleSettingState(settingName);
    }
  }
  isSettingName<TName extends string>(
    settingName: string,
    availableNames: TName[],
  ): settingName is TName {
    return availableNames.includes(settingName as TName);
  }
}
