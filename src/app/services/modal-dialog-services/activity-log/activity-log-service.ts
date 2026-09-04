import { Injectable, signal } from '@angular/core';
import { ActivityLog } from '../../../interfaces/activity-log';

@Injectable({
  providedIn: 'root',
})
export class ActivityLogService {
  private _activityLog = signal<ActivityLog[]>([]);

  activityLog = this._activityLog.asReadonly();

  addActivityLog(newActivity: string): void {
    const newActivityLog: ActivityLog = {
      activity: newActivity,
      date: new Date(),
      id: crypto.randomUUID(),
    };
    this._activityLog.update((activities) => [...activities, newActivityLog]);
  }
}
