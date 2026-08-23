import {
  Component,
  input,
  signal,
  OnDestroy,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { EditableField, ModalInteraction } from '../../types/generalTypes';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user-service/user-service';
import { fromEvent, Subscription } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-modal-component',
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './user-modal-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-modal-component.css',
})
export class UserModalComponent implements OnDestroy {
  trash = faTrashCan;
  pencil = faPencil;
  xIcon = faXmark;

  userData = input<User>();
  userId = input<string>();
  modalInteraction = input.required<ModalInteraction>();
  modalSubscription!: Subscription;
  modalRootElement = viewChild<ElementRef>('modalRootElement');
  isEditing = {
    name: signal<boolean>(false),
    email: signal<boolean>(false),
    role: signal<boolean>(false),
  };

  userForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    role: FormControl<string>;
  }>;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.modalSubscription = fromEvent(document, 'click')
      .pipe()
      .subscribe((event) => {
        if (event.target === this.modalRootElement()?.nativeElement) {
          this.clearModal();
        }
      });
  }
  buildForm() {
    this.userForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-z\s'-]{2,30}$/i)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required, Validators.pattern(/^[a-z ]{1,30}$/i)]],
    });
  }

  updateNotEdit(field: EditableField) {
    this.isEditing[field].update((v) => !v);
  }

  onSubmit(form: any) {
    this.editUser();
  }
  resetForm(form: any) {
    console.log(form);
  }

  editUser() {
    const userId = this.userData()?.id;
    userId && this.userService.editUser(userId, this.userForm.getRawValue());
    this.clearModal();
  }
  deleteUser() {
    const userId = this.userId();
    userId && this.userService.deleteUser(userId);
    this.clearModal();
  }
  clearModal() {
    this.userService.showModalSubject$.next(false);
  }
  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }
}
