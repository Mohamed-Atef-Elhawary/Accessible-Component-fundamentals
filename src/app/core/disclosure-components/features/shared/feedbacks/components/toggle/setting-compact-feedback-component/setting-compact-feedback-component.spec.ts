import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingCompactFeedbackComponent } from './setting-compact-feedback-component';

describe('SettingCompactFeedbackComponent', () => {
  let component: SettingCompactFeedbackComponent;
  let fixture: ComponentFixture<SettingCompactFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingCompactFeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingCompactFeedbackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
