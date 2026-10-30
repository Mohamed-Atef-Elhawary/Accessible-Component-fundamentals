import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingContrastFeedbackComponent } from './setting-contrast-feedback-component';

describe('SettingContrastFeedbackComponent', () => {
  let component: SettingContrastFeedbackComponent;
  let fixture: ComponentFixture<SettingContrastFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingContrastFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingContrastFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
