import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingLineHeightFeedbackComponent } from './setting-line-height-feedback-component';

describe('SettingLineHeightFeedbackComponent', () => {
  let component: SettingLineHeightFeedbackComponent;
  let fixture: ComponentFixture<SettingLineHeightFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingLineHeightFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingLineHeightFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
