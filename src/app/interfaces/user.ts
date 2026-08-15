import { WritableSignal } from '@angular/core';

export interface User {
  name: string;
  inital: string;
  email: string;
  role: string;
  isExpanded: WritableSignal<boolean>;
  isShrinked: WritableSignal<boolean>;
}
