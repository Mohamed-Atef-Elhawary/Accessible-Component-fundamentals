import { Component, computed } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility-service/accessibility-service';
import { ActivityLog } from '../../interfaces/activity-log';
import { retry } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-activity-log-component',
  styleUrl: './activity-log-component.css',
  templateUrl: './activity-log-component.html',
})
export class ActivityLogComponent {
  activityLog = computed<ActivityLog[]>(() => this.accessibilityService.ActivityLog());
  constructor(private accessibilityService: AccessibilityService) {}

  ngOnInit() {}
}

//  {
//     return this.accessibilityService.ActivityLog().map((activity) => {
//       return { ...activity, date: activity.date.toLocaleTimeString() };
//     });
//   }
