import {
  Component,
  input,
  signal,
  OnDestroy,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
  computed,
  WritableSignal,
  DestroyRef,
  OnInit,
  effect,
  untracked,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { UserField, ModalInteraction, EditableUserFields } from '../../types/generalTypes';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  ValueChangeEvent,
} from '@angular/forms';
import { InputLabel, User, UserUpdatedField } from '../../interfaces/user';
import { UserService } from '../../services/user-service/user-service';
import { fromEvent, of, Subscription } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ERROR_MESSAGE } from '../../constants/error-message';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-user-modal-component',
  imports: [ReactiveFormsModule, FontAwesomeModule, JsonPipe],
  templateUrl: './user-modal-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './user-modal-component.css',
})
export class UserModalComponent implements OnInit {
  trash = faTrashCan;
  pencil = faPencil;
  xIcon = faXmark;

  userForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    role: FormControl<string>;
  }>;

  userData = input<User>();
  userId = input<string>();

  formTitle = computed<string>(() => {
    const interaction: ModalInteraction = this.modalInteraction();
    if (interaction === 'add') {
      return 'Add New User';
    } else if (interaction === 'edit') {
      return 'Edit User';
    }
    return 'Delete User';
  });

  editingMode = computed<boolean>(() => this.modalInteraction() === 'edit');

  modalInteraction = input.required<ModalInteraction>();

  inputsLabel = computed<InputLabel>(() => {
    const editMode = this.modalInteraction() === 'edit';
    if (editMode) {
      return {
        nameLabel: 'Edit user name',
        emailLabel: 'Edit user email',
        roleLabel: 'Edit user role',
      };
    } else {
      return {
        nameLabel: 'Add user name',
        emailLabel: 'Add user email',
        roleLabel: 'Add user role',
      };
    }
  });

  errorMessage: Record<UserField, WritableSignal<string | null>> = {
    name: signal<string | null>(null),
    email: signal<string | null>(null),
    role: signal<string | null>(null),
  };
  isUserDataChanged = signal<boolean>(true);
  modalRootElement = viewChild<ElementRef>('modalRootElement');

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private destroyRef: DestroyRef,
  ) {
    effect(() => {});
  }

  ngOnInit() {
    this.buildForm();
    fromEvent(document, 'click')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event.target === this.modalRootElement()?.nativeElement) {
          this.clearModal();
        }
      });
    this.userForm.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (event) => {
        if (event instanceof ValueChangeEvent) {
          if (this.modalInteraction() === 'edit') {
            const { name, email, role } = this.userData()!;
            const userData = JSON.stringify({ name, email, role });
            const formData = JSON.stringify(event.value);
            this.isUserDataChanged.set(!(userData == formData));
          }
          const formKeys: UserField[] = Object.keys(this.userForm.controls) as UserField[];
          formKeys.forEach((fieldKey: UserField) => {
            if (this.userForm.get(fieldKey) === event.source) {
              const errors: ValidationErrors | null = event.source.errors;
              if (errors) {
                this.setErrorMessage(fieldKey, errors);
              } else {
                this.setErrorMessage(fieldKey, null);
              }
            }
          });
        }
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }

  buildForm() {
    this.userForm = this.fb.nonNullable.group({
      name: [
        this.userData()?.name || '',
        [
          Validators.required,
          Validators.pattern(/^[a-z\s'-]+$/i),
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      email: [this.userData()?.email || '', [Validators.required, Validators.email]],
      role: [
        this.userData()?.role || '',
        [
          Validators.required,
          Validators.pattern(/^[a-z\s'-]+$/i),
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
    });
  }

  setErrorMessage(field: UserField, error: ValidationErrors | null) {
    if (error) {
      const key = Object.keys(error)[0];
      if (key === 'required' || key === 'pattern') {
        const message = ERROR_MESSAGE[key](field);
        this.errorMessage[field].set(message);
      } else {
        const message = ERROR_MESSAGE[key](field, error[key]);
        this.errorMessage[field].set(message);
      }
    } else {
      this.errorMessage[field].set(null);
    }
  }

  onSubmit(form: FormGroup) {
    if (this.editingMode()) {
      this.editUser();
    } else {
      this.addUser();
    }
  }
  addUser() {
    const userdata: EditableUserFields = this.userForm.value as EditableUserFields;
    this.userService.addUser(userdata);
  }
  editUser() {
    console.log(this.userForm);
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
}
