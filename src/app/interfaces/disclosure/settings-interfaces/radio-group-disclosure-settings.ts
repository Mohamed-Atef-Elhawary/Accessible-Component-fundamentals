import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FeedbackData } from '../global-interfaces/global-settings';

export type ThemeSetting = 'system' | 'light' | 'dark';
export type PrivacySetting = 'public' | 'friends' | 'private';
export type LanguageSetting = 'arabic' | 'english';

export type RadioGroupOptions = ThemeSetting | PrivacySetting | LanguageSetting;

export type RadioGroupState<TGroup extends RadioGroupOptions> = {
  selectedOption: TGroup;
};

export type RadioGroupMap = {
  theme: ThemeSetting;
  privacy: PrivacySetting;
  language: LanguageSetting;
};

export type RadioGroupKeys = keyof RadioGroupMap;

export type RadioGroupSetting<TKey extends RadioGroupKeys> = RadioGroupMap[TKey];

export type RadioMetaDataOf<TKey extends RadioGroupKeys> = {
  settingName: RadioGroupSetting<TKey>;
  groupName: TKey;
  icon: IconDefinition;
};

export type RadioSettingsOf<TKey extends RadioGroupKeys> = RadioMetaDataOf<TKey> & {
  checked: boolean;
};

type GroupOf<TOption extends RadioGroupOptions> = {
  [K in RadioGroupKeys]: [TOption] extends [RadioGroupMap[K]] ? K : never;
}[RadioGroupKeys];

export type RadioSettingsMetaData<TOption extends RadioGroupOptions> = {
  [option in TOption]: RadioMetaDataOf<GroupOf<TOption>>;
};

type RadioSettingsData<TOption extends RadioGroupOptions> = {
  [option in TOption]: RadioSettingsOf<GroupOf<TOption>>;
};

export type RadioSettingEntryData<TGroupOptions extends RadioGroupOptions> =
  RadioSettingsData<TGroupOptions>[TGroupOptions];

export type RadioGroupViewData<TGroupOptions extends RadioGroupOptions> = {
  title: string;
  settings: RadioSettingEntryData<TGroupOptions>[];
  feedbackData: FeedbackData;
};

export type AnyRadioGroupViewData = {
  [K in RadioGroupKeys]: RadioGroupViewData<RadioGroupMap[K]>;
}[RadioGroupKeys];
