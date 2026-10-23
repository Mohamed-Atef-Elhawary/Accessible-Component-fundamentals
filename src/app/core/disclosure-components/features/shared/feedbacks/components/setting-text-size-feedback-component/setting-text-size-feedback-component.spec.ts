import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingTextSizeFeedbackComponent } from './setting-text-size-feedback-component';

describe('SettingTextSizeFeedbackComponent', () => {
  let component: SettingTextSizeFeedbackComponent;
  let fixture: ComponentFixture<SettingTextSizeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingTextSizeFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingTextSizeFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
