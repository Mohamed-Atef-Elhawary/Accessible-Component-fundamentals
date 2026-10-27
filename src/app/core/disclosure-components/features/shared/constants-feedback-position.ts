import {
  FeedbackPosition,
  FeedbackType,
} from '../../../../interfaces/disclosure/global-interfaces/global-settings';

export const FEEDBACK_POSITION: Record<FeedbackType, FeedbackPosition> = {
  email: 'bottom',
  push: 'bottom',
  motion: 'bottom',
  contrast: 'bottom',
  compact: 'bottom',
  theme: 'bottom',
  privacy: 'bottom',
  language: 'top',
  textSize: 'top',
  lineHeight: 'top',
};
