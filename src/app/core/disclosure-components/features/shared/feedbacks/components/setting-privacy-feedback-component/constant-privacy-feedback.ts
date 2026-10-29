import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { PrivacySetting } from '../../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

export type Viewer = 'friend' | 'visitor';
export type Locker = 'friends' | 'private';

export type ViewerMap = {
  viewer: Viewer;
  viewSetter: () => void;
};

export type LockMetaData = {
  [v in Locker]: {
    icon: IconDefinition;
    message: string;
  };
};

export const LOCK_METADATA: LockMetaData = {
  friends: {
    icon: faLock,
    message: 'Only friends can see this profile',
  },
  private: {
    icon: faLock,
    message: 'This profile is private',
  },
};

export const PRIVACY_DESCRIPTIONS: Record<PrivacySetting, string> = {
  public: 'Anyone can see your profile, including your about section and activity.',
  friends: "Only people you've added as friends can see your about section and activity.",
  private: 'Only you can see your profile. No one else can view it',
};
