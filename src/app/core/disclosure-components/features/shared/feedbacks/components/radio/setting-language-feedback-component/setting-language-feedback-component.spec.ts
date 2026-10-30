import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingLanguageFeedbackComponent } from './setting-language-feedback-component';

describe('SettingLanguageFeedbackComponent', () => {
  let component: SettingLanguageFeedbackComponent;
  let fixture: ComponentFixture<SettingLanguageFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingLanguageFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingLanguageFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
