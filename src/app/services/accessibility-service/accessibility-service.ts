import { Service, signal } from '@angular/core';
import { ActivityLog } from '../../interfaces/activity-log';

@Service()
export class AccessibilityService {
  backdropAccess = signal<boolean>(false);
  escAccess = signal<boolean>(false);
  scrollAccess = signal<boolean>(false);
  ActivityLog = signal<ActivityLog[]>([
    { id: crypto.randomUUID(), date: new Date(), activity: 'activity 1' },
    { id: crypto.randomUUID(), date: new Date(), activity: 'activity 2' },
    { id: crypto.randomUUID(), date: new Date(), activity: 'activity 3' },
  ]);
}
