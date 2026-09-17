import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadabilitySettingsComponent } from './readability-settings-component';

describe('ReadabilitySettingsComponent', () => {
  let component: ReadabilitySettingsComponent;
  let fixture: ComponentFixture<ReadabilitySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadabilitySettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReadabilitySettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
