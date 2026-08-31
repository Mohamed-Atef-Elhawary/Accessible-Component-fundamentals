import { Component, computed } from '@angular/core';
import { ActivityLog } from '../../interfaces/activity-log';
import { retry } from 'rxjs';
import { AccessibilityStateService } from '../../services/modal-dialog-services/accessibility-state/accessibility-state-service';

@Component({
  imports: [],
  selector: 'app-activity-log-component',
  styleUrl: './activity-log-component.css',
  templateUrl: './activity-log-component.html',
})
export class ActivityLogComponent {
  activityLog = computed<ActivityLog[]>(() => this.accessibilityService.activityLog());
  constructor(private accessibilityService: AccessibilityStateService) {}

  ngOnInit() {}
}
