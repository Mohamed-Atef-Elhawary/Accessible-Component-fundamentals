import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingNotificationFeedbackComponent } from './setting-notification-feedback-component';

describe('SettingNotificationFeedbackComponent', () => {
  let component: SettingNotificationFeedbackComponent;
  let fixture: ComponentFixture<SettingNotificationFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingNotificationFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingNotificationFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
