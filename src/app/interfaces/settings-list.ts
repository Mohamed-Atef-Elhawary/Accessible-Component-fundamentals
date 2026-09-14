import { Signal } from '@angular/core';

export interface SettingList {
  id: string;
  label: string;
  checked: Signal<boolean>;
}
