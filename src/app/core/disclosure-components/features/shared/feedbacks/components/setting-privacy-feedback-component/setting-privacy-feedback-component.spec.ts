import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingPrivacyFeedbackComponent } from './setting-privacy-feedback-component';

describe('SettingPrivacyFeedbackComponent', () => {
  let component: SettingPrivacyFeedbackComponent;
  let fixture: ComponentFixture<SettingPrivacyFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingPrivacyFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingPrivacyFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
