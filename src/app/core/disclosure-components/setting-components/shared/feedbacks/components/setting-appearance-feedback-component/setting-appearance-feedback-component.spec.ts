import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingAppearanceFeedbackComponent } from './setting-appearance-feedback-component';

describe('SettingAppearanceFeedbackComponent', () => {
  let component: SettingAppearanceFeedbackComponent;
  let fixture: ComponentFixture<SettingAppearanceFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingAppearanceFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingAppearanceFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
