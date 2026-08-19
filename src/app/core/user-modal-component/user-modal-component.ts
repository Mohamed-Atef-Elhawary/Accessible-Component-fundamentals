import { Component, input, signal } from '@angular/core';
import { EditableField, EditableUserFields, ModalInteraction } from '../../types/generalTypes';
import { Trash2, PencilLine, LucideAngularModule } from 'lucide-angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user-service/user-service';

@Component({
  selector: 'app-user-modal-component',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './user-modal-component.html',
  styleUrl: './user-modal-component.css',
})
export class UserModalComponent {
  trash = Trash2;
  pencil = PencilLine;

  userData = input<User>();
  userId = input<string>();
  modalInteraction = input.required<ModalInteraction>();

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
  }
}
