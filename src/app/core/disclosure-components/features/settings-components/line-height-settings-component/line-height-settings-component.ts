import { Component, computed, inject } from '@angular/core';
import { MultipleOpenSectionsDirective } from '../../../../../directives/disclosure-directives/multiple-open-sections-directive/multiple-open-sections-directive';
import { FeedbackData } from '../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  ReadabilitySettingsMetaData,
  LineHeightSetting,
} from '../../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';
import {
  LineHeightSettingsStore,
  LINE_HEIGHT_SETTINGS_METADATA,
} from '../../../../../stores/setting-stores/settings/readability-settings-stores/line-height-settings-store/line-height-settings-store';
import { DisclosureSectionComponent } from '../../../disclosure-section-component/disclosure-section-component';
import { ReadabilitySettingsComponent } from '../../shared/readability/readability-settings-component/readability-settings-component';

@Component({
  imports: [
    DisclosureSectionComponent,
    ReadabilitySettingsComponent,
    MultipleOpenSectionsDirective,
  ],
  selector: 'app-line-height-settings-component',
  styleUrl: './line-height-settings-component.css',
  templateUrl: './line-height-settings-component.html',
})
export class LineHeightSettingsComponent {
  lineHeightSettingsStore = inject(LineHeightSettingsStore);
  lineHeightSettings = computed<ReadabilitySettingsMetaData>(() => {
    return {
      ...LINE_HEIGHT_SETTINGS_METADATA,
      settingRangeValue: this.lineHeightSettingsStore.lineHeightPercent(),
    };
  });
  lineHeightFeedbackData = computed<FeedbackData>(() => {
    const lineHeightPercent = this.lineHeightSettingsStore.lineHeightPercent();
    return { feedbackType: 'lineHeight', payload: lineHeightPercent };
  });
  onLineHeightRangeValue(value: number) {
    const newLineHeightRangeValue: LineHeightSetting = { lineHeightPercent: value };

    this.lineHeightSettingsStore.updateSettingState(newLineHeightRangeValue);
  }
}
