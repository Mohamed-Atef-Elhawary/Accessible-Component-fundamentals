import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogHeaderComponent } from './modal-dialog-header-component';

describe('ModalDialogHeaderComponent', () => {
  let component: ModalDialogHeaderComponent;
  let fixture: ComponentFixture<ModalDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDialogHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDialogHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
