import { Service, signal } from '@angular/core';

@Service()
export class AccessibilityService {
  backdropAccess = signal<boolean>(false);
  escAccess = signal<boolean>(false);
  scrollAccess = signal<boolean>(false);
}
