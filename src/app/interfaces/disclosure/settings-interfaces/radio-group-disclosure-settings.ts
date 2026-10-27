import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faDisplay, faGlobe, faLock, faS, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FeedbackData, FeedbackPosition } from '../global-interfaces/global-settings';
import { Type } from '@angular/core';

export type ThemeSetting = 'system' | 'light' | 'dark';
export type PrivacySetting = 'public' | 'friends' | 'private';
export type LanguageSetting = 'arabic' | 'english';

export type RadioGroupOptions = ThemeSetting | PrivacySetting | LanguageSetting;

export type RadioGroupState<TName extends RadioGroupOptions> = {
  selectedOption: TName;
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

// export type PositionedRadioSettingsOf<TKey extends RadioGroupKeys> = RadioSettingsOf<TKey> & {
//   // feedbackPosition: FeedbackPosition;
// };

type GroupOf<TOption extends RadioGroupOptions> = {
  [K in RadioGroupKeys]: [TOption] extends [RadioGroupMap[K]] ? K : never;
  // [K in RadioGroupKeys]: K;
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

// export type PositionedRadioSettingsData<TOption extends RadioGroupName> = {
//   [Option in TOption]: PositionedRadioSettingsOf<GroupOf<TOption>>;
// };

export type Direction = 'rtl' | 'ltr';
export interface LanguageSettingsText {
  direction: Direction;
  langTitle: string;
  notificationText: string;
  dateTitle: string;
}

//////////////////////////////////////////////////////////////////////////////////////////

// const o: ob<PrivacySetting> = {
//   feedbackData: { feedbackType: 'privacy', payload: 'public' },
//   title: 'Who can see my profile?',
//   settings: [
//     { checked: true, groupName: 'privacy', settingName: 'private', icon: faS },
//     { checked: true, groupName: 'privacy', settingName: 'private', icon: faS },
//     { checked: true, groupName: 'privacy', settingName: 'private', icon: faS },
//   ],
// };
// const s1: RadioSettingData1<PrivacySetting> = {
//   settingName: 'friends',
//   groupName: 'privacy',
//   icon: faDisplay,
// };
// const s: RadioSettingEntry<PrivacySetting> = {
//   checked: false,
//   settingName: 'friends',
//   groupName: 'privacy',
//   icon: faDisplay,
//   feedbackData: { feedbackType: 'privacy', payload: 'friends' },
// };
// public: {
//   checked: false,
//   settingName: 'friends',
//   groupName: 'privacy',
//   icon: faDisplay,
//   feedbackData: { feedbackType: 'privacy', payload: 'friends' },
// },
// friends: {
//   checked: false,
//   settingName: 'friends',
//   groupName: 'privacy',
//   icon: faDisplay,
//   feedbackData: { feedbackType: 'privacy', payload: 'friends' },
// },

// const ss: RadioSettingsData<PrivacySetting> = {
//   friends: {
//     checked: false,
//     settingName: 'friends',
//     groupName: 'privacy',
//     icon: faDisplay,
//     feedbackData: { feedbackType: 'privacy', payload: 'friends' },
//   },
//   private: {
//     checked: false,
//     settingName: 'friends',
//     groupName: 'privacy',
//     icon: faDisplay,
//     feedbackData: { feedbackType: 'privacy', payload: 'friends' },
//   },
//   public: {
//     checked: false,
//     settingName: 'friends',
//     groupName: 'privacy',
//     icon: faDisplay,
//     feedbackData: { feedbackType: 'privacy', payload: 'friends' },
//   },
// };

// export type RadioSettingsData <TOption extends RadioGroupName>={
// title:string,
// settings:RadioSettingsMetaData<TOption>
// }

////////////////////////////////////////////////////////////////////////
// export type Theme = 'system' | 'light' | 'dark';

// // export type PrivacyOption = 'public' | 'friends' | 'private';

// export interface DisplaySettingValue {
//   selectedOption: Theme;
// }

// export interface DisplaySettingsState {
//   draftedState: DisplaySettingValue;
//   savedState: DisplaySettingValue;
// }

// export interface PrivacySettingsValue {
//   selectedOption: PrivacyOption;
// }

// export interface PrivacySettingsState {
//   draftedState: PrivacySettingsValue;
//   savedState: PrivacySettingsValue;
// }

// export interface PrivacySettingsData {
//   option: PrivacyOption;
//   icon: IconDefinition;
// }

// export type RadioGroup = PrivacyOption | Theme;

// export interface RadioSettingsGroup<TSetting> {
//   option: TSetting;
//   // name: RadioGroupName;
//   checked: boolean;
//   icon: IconDefinition;
// }

// export interface RadioSettingsData<TSetting extends string> {
//   title: string;
//   settings: RadioSettingsGroup<TSetting>[];
// }
