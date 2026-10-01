import { WritableSignal } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface ReadabilitySettingData {
  settingRangeValue: WritableSignal<number>;
  previewTitle: string;
  previewDescription: string;
  settingTitle: string;
  settingSubtitle: string;
  cssProperty: string;
  icon: IconDefinition;
}
