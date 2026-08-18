import { WritableSignal } from '@angular/core';

export interface User {
  name: string;
  initial: string;
  email: string;
  role: string;
  id: string;
}
export interface UserExpandState {
  isExpanded: WritableSignal<boolean>;
  isShrinked: WritableSignal<boolean>;
}
