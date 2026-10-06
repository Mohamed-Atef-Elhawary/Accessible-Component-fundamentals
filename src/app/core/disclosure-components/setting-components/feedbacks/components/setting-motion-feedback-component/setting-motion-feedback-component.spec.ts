import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingMotionFeedbackComponent } from './setting-motion-feedback-component';

describe('SettingMotionFeedbackComponent', () => {
  let component: SettingMotionFeedbackComponent;
  let fixture: ComponentFixture<SettingMotionFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingMotionFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingMotionFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
