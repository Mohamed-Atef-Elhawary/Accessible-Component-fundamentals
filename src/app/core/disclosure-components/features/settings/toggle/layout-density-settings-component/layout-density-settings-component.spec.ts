import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutDensitySettingsComponent } from './layout-density-settings-component';

describe('LayoutDensitySettingsComponent', () => {
  let component: LayoutDensitySettingsComponent;
  let fixture: ComponentFixture<LayoutDensitySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDensitySettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutDensitySettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
