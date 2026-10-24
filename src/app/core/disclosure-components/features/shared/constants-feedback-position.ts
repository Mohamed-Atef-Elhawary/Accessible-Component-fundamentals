import {
  FeedbackPosition,
  FeedbackType,
} from '../../../../interfaces/disclosure/global-interfaces/global-settings';

export const FEEDBACK_POSITION: Record<FeedbackType, FeedbackPosition> = {
  status: 'bottom',
  motion: 'bottom',
  contrast: 'bottom',
  compact: 'bottom',
  theme: 'bottom',
  privacy: 'bottom',
  textSize: 'top',
  lineHeight: 'top',
};
