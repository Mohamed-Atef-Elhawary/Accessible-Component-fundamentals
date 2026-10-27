import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineHeightSettingsComponent } from './line-height-settings-component';

describe('LineHeightSettingsComponent', () => {
  let component: LineHeightSettingsComponent;
  let fixture: ComponentFixture<LineHeightSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineHeightSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LineHeightSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
