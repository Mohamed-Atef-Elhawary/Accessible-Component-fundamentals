import { Component, computed, inject } from '@angular/core';
import {
  ToggleSettingMetaData,
  CompactSettingName,
} from '../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
import {
  CompactSettingsStore,
  COMPACT_SETTINGS_METADATA,
} from '../../../../../stores/setting-stores/settings/toggle-settings-stores/compact-settings-store/compact-settings-store';
import { ToggleSettingsListComponent } from '../../shared/toggle/toggle-settings-list-component/toggle-settings-list-component';

@Component({
  imports: [ToggleSettingsListComponent],
  selector: 'app-layout-density-settings-component',
  styleUrl: './layout-density-settings-component.css',
  templateUrl: './layout-density-settings-component.html',
})
export class LayoutDensitySettingsComponent {
  compactSettingsStore = inject(CompactSettingsStore);
  compactSettings = computed<ToggleSettingMetaData<CompactSettingName>[]>(() => {
    return [
      {
        checked: this.compactSettingsStore.draftedState.compact(),
        ...COMPACT_SETTINGS_METADATA.compact,
        preview: {
          feedbackType: 'compact',
          payload: this.compactSettingsStore.draftedState.compact(),
        },
      },
    ];
  });
  compactSettingsToggler(settingName: string) {
    if (this.isSettingName<CompactSettingName>(settingName, ['compact'])) {
      this.compactSettingsStore.toggleSettingState(settingName);
    }
  }
  isSettingName<TName extends string>(
    settingName: string,
    availableNames: TName[],
  ): settingName is TName {
    return availableNames.includes(settingName as TName);
  }
}
