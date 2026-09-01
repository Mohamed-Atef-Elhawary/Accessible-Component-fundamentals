import { Component, computed } from '@angular/core';
import { ActivityLog } from '../../interfaces/activity-log';
import { ActivityLogService } from '../../services/modal-dialog-services/activity-log-service';

@Component({
  imports: [],
  selector: 'app-activity-log-component',
  styleUrl: './activity-log-component.css',
  templateUrl: './activity-log-component.html',
})
export class ActivityLogComponent {
  activityLog = computed<ActivityLog[]>(() => this.activityLogService.activityLog());
  constructor(private activityLogService: ActivityLogService) {}

  ngOnInit() {}
}
