import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingTHemeFeedbackComponent } from './setting-theme-feedback-component';

describe('SettingTHemeFeedbackComponent', () => {
  let component: SettingTHemeFeedbackComponent;
  let fixture: ComponentFixture<SettingTHemeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingTHemeFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingTHemeFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
