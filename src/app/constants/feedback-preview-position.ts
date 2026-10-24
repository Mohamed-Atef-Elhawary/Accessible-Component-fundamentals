import { Theme } from '../interfaces/disclosure/settings-interfaces/display-disclosure-settings';

export type MotionLevel = 'full' | 'reduced';

export const MOTION_PREVIEW_DESCRIPTION: Record<MotionLevel, string> = {
  full: 'Animations are on. Elements move smoothly as you use the app.',
  reduced: 'Motion is reduced. Changes appear instantly or fade in gently.',
};

export const THEME_LABELS: Record<Theme, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};
