import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityPlaygroundComponent } from './accessibility-playground-component';

describe('AccessibilityPlaygroundComponent', () => {
  let component: AccessibilityPlaygroundComponent;
  let fixture: ComponentFixture<AccessibilityPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityPlaygroundComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
