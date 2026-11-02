import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RangeViewData } from '../../../../../../interfaces/disclosure/settings-interfaces/range-disclosure-settings';
import { TextSizeSettingsStore } from '../../../../../../stores/setting-stores/settings/range/text-size/text-size-settings-store';
import { TEXT_SIZE_SETTING_METADATA } from '../../../../../../stores/setting-stores/settings/range/text-size/text-size-constant';
import { RangeSettingsComponent } from '../../../shared/range/range-settings-component/range-settings-component';

@Component({
  imports: [RangeSettingsComponent],
  selector: 'app-text-size-settings-component',
  styleUrl: './text-size-settings-component.css',
  templateUrl: './text-size-settings-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextSizeSettingsComponent {
  textSizeStore = inject(TextSizeSettingsStore);
  textSizeRangeViewData = computed<RangeViewData>(() => {
    const draftedPercent = this.textSizeStore.draftedPercent();
    return {
      ...TEXT_SIZE_SETTING_METADATA,
      draftedPercent: draftedPercent,
      feedbackData: { feedbackType: 'textSize', payload: draftedPercent },
    };
  });
  onTextSizeRangeValue(newPreferredPercent: number) {
    this.textSizeStore.updatePreferredPercent(newPreferredPercent);
  }
}
