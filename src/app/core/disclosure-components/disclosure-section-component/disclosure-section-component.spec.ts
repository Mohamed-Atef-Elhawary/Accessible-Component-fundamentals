import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisclosureSectionComponent } from './disclosure-section-component';

describe('DisclosureSectionComponent', () => {
  let component: DisclosureSectionComponent;
  let fixture: ComponentFixture<DisclosureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosureSectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisclosureSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
