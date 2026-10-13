import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsFeedbackResolverComponent } from './settings-feedback-resolver-component';

describe('SettingsFeedbackResolverComponent', () => {
  let component: SettingsFeedbackResolverComponent;
  let fixture: ComponentFixture<SettingsFeedbackResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsFeedbackResolverComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingsFeedbackResolverComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
