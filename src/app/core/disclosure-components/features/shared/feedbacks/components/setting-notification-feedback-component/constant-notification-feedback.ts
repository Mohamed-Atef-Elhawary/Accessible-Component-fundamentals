import { NotificationSetting } from '../../../../../../../interfaces/disclosure/settings-interfaces/toggle-disclosure-settings';
type OnOffMessages = {
  on: string;
  off: string;
};
export const FEEDBACK_MESSAGE: Record<NotificationSetting, OnOffMessages> = {
  email: {
    on: 'Email notifications are on.',
    off: 'Email notifications are off.',
  },
  push: {
    on: 'Push notifications are on.',
    off: 'Push notifications are off.',
  },
};
