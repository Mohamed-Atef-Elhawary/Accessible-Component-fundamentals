import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiIntegration } from './ai-integration';

describe('AiIntegration', () => {
  let component: AiIntegration;
  let fixture: ComponentFixture<AiIntegration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiIntegration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiIntegration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
