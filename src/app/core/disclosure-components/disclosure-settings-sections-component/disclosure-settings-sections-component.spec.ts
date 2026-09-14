import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisclosureSettingsSectionsComponent } from './disclosure-settings-sections-component';

describe('DisclosureSettingsSectionsComponent', () => {
  let component: DisclosureSettingsSectionsComponent;
  let fixture: ComponentFixture<DisclosureSettingsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosureSettingsSectionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisclosureSettingsSectionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
