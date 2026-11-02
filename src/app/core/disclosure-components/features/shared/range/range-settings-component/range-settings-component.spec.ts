import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RangeSettingsComponent } from './range-settings-component';

describe('RangeSettingsComponent', () => {
  let component: RangeSettingsComponent;
  let fixture: ComponentFixture<RangeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RangeSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
