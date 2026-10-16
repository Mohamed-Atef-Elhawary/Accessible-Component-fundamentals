import { Component, computed, inject, input, signal } from '@angular/core';
import { PrivacyOption } from '../../../../../../../interfaces/disclosure/settings-interfaces/privacy-disclosure-settings';
import { UserService } from '../../../../../../../services/modal-dialog-services/user-service/user-service';
import { AvatarColorService } from '../../../../../../../services/modal-dialog-services/avatar-color/avatar-color-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-setting-privacy-feedback-component',
  styleUrl: './setting-privacy-feedback-component.css',
  templateUrl: './setting-privacy-feedback-component.html',
})
export class SettingPrivacyFeedbackComponent {
  userService = inject(UserService);
  avatarColorService = inject(AvatarColorService);
  userName = signal('Mohamed A.');
  userInit = this.userService.buildInitial(this.userName());
  bgColor = this.avatarColorService.getAvatarColor(this.userName());

  privacyPayload = input.required<PrivacyOption>();
  viewer = signal<'visitor' | 'friend'>('friend');
  isAllow = computed(() => {
    const privacyPayload = this.privacyPayload();

    if (privacyPayload === 'public') {
      return true;
    } else if (privacyPayload === 'friends' && this.viewer() === 'friend') {
      return true;
    }
    return false;
  });
  description = computed(() => {
    const privacyPayload = this.privacyPayload();
    switch (privacyPayload) {
      case 'public':
        return 'Anyone can see your profile, including your about section and activity.';
      case 'friends':
        return 'Only people you’ve added as friends can see your about section and activity.';
      default:
        return 'Only you can see your profile. No one else can view it';
    }
  });

  lock = computed(() => {
    const privacyPayload = this.privacyPayload();
    if (privacyPayload === 'friends') {
      return {
        message: 'Only friends can see this profile',
        icon: faLock,
      };
    }
    return {
      message: 'This profile is private',
      icon: faLock,
    };
  });

  setPublic() {
    // this.privacyState.set('public');
  }
  setFriends() {
    // this.privacyState.set('friends');
  }
  setPrivate() {
    // this.privacyState.set('private');
  }
  setVisitor() {
    this.viewer.set('visitor');
  }
  setFriend() {
    this.viewer.set('friend');
  }
}
