import { Component, computed, inject } from '@angular/core';
import { FeedbackData } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ReadabilitySettingsMetaData,
  TextSizeSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';
import {
  TextSizeSettingsStore,
  TEXT_SIZE_SETTINGS_METADATA,
} from '../../../../../stores/setting-stores/settings/readability/text-size-settings-store/text-size-settings-store';
import { ReadabilitySettingsComponent } from '../../shared/readability/readability-settings-component/readability-settings-component';

@Component({
  imports: [ReadabilitySettingsComponent],
  selector: 'app-text-size-settings-component',
  styleUrl: './text-size-settings-component.css',
  templateUrl: './text-size-settings-component.html',
})
export class TextSizeSettingsComponent {
  textSizeSettingsStore = inject(TextSizeSettingsStore);
  textSizeSettings = computed<ReadabilitySettingsMetaData>(() => {
    return {
      ...TEXT_SIZE_SETTINGS_METADATA,
      settingRangeValue: this.textSizeSettingsStore.textSizePercent(),
    };
  });
  textSizeFeedbackData = computed<FeedbackData>(() => {
    const textSizePercent = this.textSizeSettingsStore.textSizePercent();
    return {
      feedbackType: 'textSize',
      payload: textSizePercent,
    };
  });
  onTextSizeRangeValue(value: number) {
    const newTextSizeRangeValue: TextSizeSetting = { textSizePercent: value };
    this.textSizeSettingsStore.updateSettingState(newTextSizeRangeValue);
  }
}
