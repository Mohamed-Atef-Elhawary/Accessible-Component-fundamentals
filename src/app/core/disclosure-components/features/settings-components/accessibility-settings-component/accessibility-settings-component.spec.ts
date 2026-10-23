import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessibilitySettingsComponent } from './accessibility-settings-component';

describe('AccessibilitySettingsComponent', () => {
  let component: AccessibilitySettingsComponent;
  let fixture: ComponentFixture<AccessibilitySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilitySettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccessibilitySettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
