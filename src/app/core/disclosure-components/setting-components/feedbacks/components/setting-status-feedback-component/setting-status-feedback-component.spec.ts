import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingStatusFeedbackComponent } from './setting-status-feedback-component';

describe('SettingStatusFeedbackComponent', () => {
  let component: SettingStatusFeedbackComponent;
  let fixture: ComponentFixture<SettingStatusFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingStatusFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingStatusFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
