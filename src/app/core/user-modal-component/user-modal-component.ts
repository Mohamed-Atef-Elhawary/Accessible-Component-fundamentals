import {
  Component,
  signal,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
  computed,
  WritableSignal,
  DestroyRef,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  afterNextRender,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserField, EditableUserFields, FocusableElement } from '../../types/generalTypes';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  ValueChangeEvent,
} from '@angular/forms';
import { InputLabel } from '../../interfaces/user';
import { UserService } from '../../services/modal-dialog-services/user-service/user-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ERROR_MESSAGE } from '../../constants/error-message';
import { UserModalStateService } from '../../services/modal-dialog-services/user-modal-state/user-modal-state-service';
import { AccessibilityStateService } from '../../services/modal-dialog-services/accessibility-state/accessibility-state-service';
import { CloseOnBackdropDirective } from '../../directives/mogal-dialog-directives/close-onbackdrop-click-directive/close-on-backdrop-directive';
import { ActivityLogService } from '../../services/modal-dialog-services/activity-log-service';
import { FocusTrapDirective } from '../../directives/mogal-dialog-directives/Focus-trap-directive/focus-trap-directive';
@Component({
  selector: 'app-user-modal-component',
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    CloseOnBackdropDirective,
    FocusTrapDirective,
    FormsModule,
  ],
  templateUrl: './user-modal-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './user-modal-component.css',
})
export class UserModalComponent implements OnInit {
  trash = faTrashCan;
  pencil = faPencil;
  xIcon = faXmark;

  userData = computed(() => this.userModalStateService.userData());
  username = computed(() => this.userModalStateService.userName());
  userId = computed(() => this.userModalStateService.userid());
  editingMode = computed<boolean>(() => this.userModalStateService.modalInteraction() === 'edit');
  modalInteraction = computed(() => this.userModalStateService.modalInteraction());

  firstFocusedElement = signal<FocusableElement | null>(null);
  firstFocusedButttonElement = viewChild<ElementRef>('firstFocusedButttonElement');
  firstFocusedInputElement = viewChild<ElementRef>('firstFocusedInputElement');

  userForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    role: FormControl<string>;
  }>;
  formTitle = computed<string | null>(() => {
    if (this.modalInteraction() === 'add') {
      return 'Add New User';
    } else if (this.modalInteraction() === 'edit') {
      return 'Edit User';
    } else if (this.modalInteraction() === 'delete') {
      return 'Delete User';
    }
    return null;
  });

  inputsLabel = computed<InputLabel>(() => {
    if (this.editingMode()) {
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
  closeOnBackdropClick = computed<boolean>(() =>
    this.accessibilityStateService.closeOnBackdropClick(),
  );
  closeOnEsc = computed<boolean>(() => this.accessibilityStateService.closeOnEsc());
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private destroyRef: DestroyRef,
    private userModalStateService: UserModalStateService,
    private accessibilityStateService: AccessibilityStateService,
    private activityLogService: ActivityLogService,
  ) {
    afterNextRender(() => {
      if (this.modalInteraction() === 'delete') {
        this.firstFocusedElement.set(this.firstFocusedButttonElement()?.nativeElement);
      } else {
        this.firstFocusedElement.set(this.firstFocusedInputElement()?.nativeElement);
      }
    });
  }

  ngOnInit() {
    this.buildForm();
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
  onCancel(buttonType: string) {
    this.activityLogService.addActivityLog(`Closed modal via ${buttonType} button`);
    this.clearModal();
  }
  addUser() {
    const userdata: EditableUserFields = this.userForm.value as EditableUserFields;
    this.userService.addUser(userdata);
    this.activityLogService.addActivityLog(` Added new user: ${userdata.name}`);
    this.clearModal();
  }
  editUser() {
    const userId = this.userData()?.id;
    if (userId) {
      this.userService.editUser(userId, this.userForm.getRawValue());
      this.activityLogService.addActivityLog(`Edit user: ${this.userData()?.name}`);
      this.clearModal();
    }
  }
  deleteUser() {
    const userId = this.userId();
    if (userId) {
      this.userService.deleteUser(userId);
      this.activityLogService.addActivityLog(`Deleted user ${this.username()}`);
      this.clearModal();
    }
  }
  clearModal() {
    this.userModalStateService.clearModal();
  }
}
