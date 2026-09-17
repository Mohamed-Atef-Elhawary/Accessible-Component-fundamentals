import { User } from '../interfaces/user';

export type ModalInteraction = 'add' | 'edit' | 'delete';
export type UserField = 'name' | 'email' | 'role';
export type EditableUserFields = Pick<User, 'name' | 'email' | 'role'>;
export type FocusableElement = HTMLInputElement | HTMLButtonElement;
export type PreferredTheme = 'system' | 'dark' | 'light';
export type SelectedLanguage = 'arabic' | 'english';
