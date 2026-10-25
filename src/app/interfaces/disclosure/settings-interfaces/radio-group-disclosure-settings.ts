import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { FeedbackData, FeedbackPosition } from '../global-interfaces/global-settings';

export type ThemeSetting = 'system' | 'light' | 'dark';
export type PrivacySetting = 'public' | 'friends' | 'private';
export type LanguageSetting = 'arabic' | 'english';

export type RadioGroupName = ThemeSetting | PrivacySetting | LanguageSetting;

export type RadioGroupState<TName extends RadioGroupName> = {
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
  feedbackData: FeedbackData;
};
export type PositionedRadioSettingsOf<TKey extends RadioGroupKeys> = RadioSettingsOf<TKey> & {
  feedbackPosition: FeedbackPosition;
};

type GroupOf<TOption extends RadioGroupName> = {
  [K in RadioGroupKeys]: [TOption] extends [RadioGroupMap[K]] ? K : never;
}[RadioGroupKeys];

export type RadioSettingsMetaData<TOption extends RadioGroupName> = {
  [Option in TOption]: RadioMetaDataOf<GroupOf<TOption>>;
};

export type RadioSettingsData<TOption extends RadioGroupName> = {
  [Option in TOption]: RadioSettingsOf<GroupOf<TOption>>;
};
export type PositionedRadioSettingsData<TOption extends RadioGroupName> = {
  [Option in TOption]: PositionedRadioSettingsOf<GroupOf<TOption>>;
};
//////////////////////////////////////////////////////////////////////////////////////////
const s: RadioSettingsMetaData<ThemeSetting> = {
  system: {
    settingName: 'system',
    groupName: 'theme',
    icon: faDisplay,
    // checked: true,
  },
  dark: {
    settingName: 'dark',
    groupName: 'theme',

    icon: faDisplay,
    // checked: true,
  },
  light: {
    settingName: 'light',

    groupName: 'theme',
    icon: faDisplay,
    // checked: true,
  },
};
const s2: RadioSettingsData<ThemeSetting> = {
  system: {
    settingName: 'system',
    groupName: 'theme',
    icon: faDisplay,
    checked: true,
    feedbackData: { feedbackType: 'compact', payload: true },
  },
  dark: {
    settingName: 'dark',
    groupName: 'theme',

    icon: faDisplay,
    checked: true,
    feedbackData: { feedbackType: 'compact', payload: true },
  },
  light: {
    settingName: 'light',

    groupName: 'theme',
    icon: faDisplay,
    checked: true,
    feedbackData: { feedbackType: 'compact', payload: true },
  },
};

// export type RadioSettingsData <TOption extends RadioGroupName>={
// title:string,
// settings:RadioSettingsMetaData<TOption>
// }

export type Direction = 'rtl' | 'ltr';
export interface LanguageSettingsText {
  direction: Direction;
  langTitle: string;
  notificationText: string;
  dateTitle: string;
}

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
