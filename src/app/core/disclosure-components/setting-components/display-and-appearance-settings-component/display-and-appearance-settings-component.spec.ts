import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayAndAppearanceSettingsComponent } from './display-and-appearance-settings-component';

describe('DisplayAndAppearanceSettingsComponent', () => {
  let component: DisplayAndAppearanceSettingsComponent;
  let fixture: ComponentFixture<DisplayAndAppearanceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAndAppearanceSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisplayAndAppearanceSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
