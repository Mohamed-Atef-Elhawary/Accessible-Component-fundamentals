import { Injectable, signal } from '@angular/core';
import { ActivityLog } from '../../../interfaces/activity-log';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityStateService {
  private _closeOnBackdropClick = signal<boolean>(true);
  private _closeOnEsc = signal<boolean>(true);
  private _lockScroll = signal<boolean>(false);

  private _activityLog = signal<ActivityLog[]>([
    { id: crypto.randomUUID(), date: new Date(), activity: 'activity 1' },
    { id: crypto.randomUUID(), date: new Date(), activity: 'activity 2' },
    { id: crypto.randomUUID(), date: new Date(), activity: 'activity 3' },
  ]);

  closeOnBackdropClick = this._closeOnBackdropClick.asReadonly();
  closeOnEsc = this._closeOnEsc.asReadonly();
  lockScroll = this._lockScroll.asReadonly();
  activityLog = this._activityLog.asReadonly();

  toggleCloseOnBackdropClick() {
    this._closeOnBackdropClick.update((state) => !state);
  }
  toggleCloseOnEsc() {
    this._closeOnEsc.update((state) => !state);
  }
  toggleLookScroll() {
    this._lockScroll.update((state) => !state);
  }

  addActivityLog(newActivity: string): void {
    const newActivityLog: ActivityLog = {
      activity: newActivity,
      date: new Date(),
      id: crypto.randomUUID(),
    };
    this._activityLog.update((activities) => [...activities, newActivityLog]);
  }
}
