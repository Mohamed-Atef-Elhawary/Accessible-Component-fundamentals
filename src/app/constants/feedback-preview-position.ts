import { ThemeSetting } from '../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';

export type MotionLevel = 'full' | 'reduced';

export const MOTION_PREVIEW_DESCRIPTION: Record<MotionLevel, string> = {
  full: 'Animations are on. Elements move smoothly as you use the app.',
  reduced: 'Motion is reduced. Changes appear instantly or fade in gently.',
};

export const THEME_LABELS: Record<ThemeSetting, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};
