import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleSettingsListComponent } from './toggle-settings-list-component';

describe('ToggleSettingsListComponent', () => {
  let component: ToggleSettingsListComponent;
  let fixture: ComponentFixture<ToggleSettingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSettingsListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToggleSettingsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
