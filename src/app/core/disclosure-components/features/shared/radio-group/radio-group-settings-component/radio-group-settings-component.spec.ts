import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioGroupSettingsComponent } from './radio-group-settings-component';

describe('RadioGroupSettingsComponent', () => {
  let component: RadioGroupSettingsComponent;
  let fixture: ComponentFixture<RadioGroupSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RadioGroupSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
