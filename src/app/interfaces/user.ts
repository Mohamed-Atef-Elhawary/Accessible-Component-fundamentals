import { WritableSignal } from '@angular/core';

export interface UserUpdatedField {
  name: string;
  email: string;
  role: string;
}

export interface User extends UserUpdatedField {
  initial: string;
  id: string;
}
export interface UserExpandState {
  isExpanded: WritableSignal<boolean>;
  isShrinked: WritableSignal<boolean>;
}

export interface InputLabel {
  nameLabel: string;
  emailLabel: string;
  roleLabel: string;
}
