import { Component, computed, inject } from '@angular/core';

import { FeedbackData } from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import {
  LineHeightSetting,
  RangeViewData,
} from '../../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';
import { LineHeightSettingsStore } from '../../../../../../stores/setting-stores/settings/range/line-height/line-height-settings-store';
import { LINE_HEIGHT_SETTING_METADATA } from '../../../../../../stores/setting-stores/settings/range/line-height/line-height-constant';
import { RangeSettingsComponent } from '../../../shared/range/range-settings-component/range-settings-component';

@Component({
  imports: [RangeSettingsComponent],
  selector: 'app-line-height-settings-component',
  styleUrl: './line-height-settings-component.css',
  templateUrl: './line-height-settings-component.html',
})
export class LineHeightSettingsComponent {
  lineHeightStore = inject(LineHeightSettingsStore);
  lineHeightRangeViewData = computed<RangeViewData>(() => {
    const draftedPercent = this.lineHeightStore.draftedPercent();
    return {
      ...LINE_HEIGHT_SETTING_METADATA,
      draftedPercent: draftedPercent,
      feedbackData: { feedbackType: 'lineHeight', payload: draftedPercent },
    };
  });

  onLineHeightRangeValue(newPreferredPercent: number) {
    this.lineHeightStore.updatePreferredPercent(newPreferredPercent);
  }
}
