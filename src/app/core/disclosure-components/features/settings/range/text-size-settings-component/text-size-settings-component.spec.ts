import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextSizeSettingsComponent } from './text-size-settings-component';

describe('TextSizeSettingsComponent', () => {
  let component: TextSizeSettingsComponent;
  let fixture: ComponentFixture<TextSizeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSizeSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextSizeSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
