import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { UserService } from '../../../../../../../../services/modal-dialog-services/user-service/user-service';
import { AvatarColorService } from '../../../../../../../../services/modal-dialog-services/avatar-color/avatar-color-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrivacySetting } from '../../../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import {
  LOCK_METADATA,
  PRIVACY_DESCRIPTIONS,
  Viewer,
  ViewerMap,
} from './constant-privacy-feedback';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-setting-privacy-feedback-component',
  styleUrl: './setting-privacy-feedback-component.css',
  templateUrl: './setting-privacy-feedback-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingPrivacyFeedbackComponent {
  userService = inject(UserService);
  avatarColorService = inject(AvatarColorService);

  userName = signal('Mohamed A.');
  userInit = this.userService.buildInitial(this.userName());
  bgColor = this.avatarColorService.getAvatarColor(this.userName());

  privacyPayload = input.required<PrivacySetting>();

  viewer = signal<Viewer>('friend');

  isAllow = computed(() => {
    const privacyPayload = this.privacyPayload();

    if (privacyPayload === 'private') return false;

    if (privacyPayload === 'public') return true;

    return this.viewer() === 'friend';
  });

  lockMetaData = computed(() => {
    if (this.privacyPayload() === 'private') return LOCK_METADATA.private;
    return LOCK_METADATA.friends;
  });

  viewersMap: ViewerMap[] = [
    {
      viewer: 'friend',
      viewSetter: () => this.viewer.set('friend'),
    },
    {
      viewer: 'visitor',
      viewSetter: () => this.viewer.set('visitor'),
    },
  ];

  description = computed(() => {
    return PRIVACY_DESCRIPTIONS[this.privacyPayload()];
  });
}
