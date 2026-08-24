import { User } from '../interfaces/user';

export type ModalInteraction = 'add' | 'edit' | 'delete';
export type EditableField = 'name' | 'email' | 'role';
export type EditableUserFields = Pick<User, 'name' | 'email' | 'role'>;
