import { Component, signal } from '@angular/core';
import { EditableField, ModalInteraction } from '../../types/generalTypes';
import { Trash2, PencilLine, LucideAngularModule } from 'lucide-angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-modal-component',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './user-modal-component.html',
  styleUrl: './user-modal-component.css',
})
export class UserModalComponent {
  user: User = { id: '1', email: 'ddd@g.com', initial: 'dd', name: 'ss ssss', role: 'dddd' };
  modalInteraction = signal<ModalInteraction>('edit');

  isEditing = {
    name: signal<boolean>(false),
    email: signal<boolean>(false),
    role: signal<boolean>(false),
  };

  trash = Trash2;
  pencil = PencilLine;
  userForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    role: FormControl<string>;
  }>;
  constructor(private fb: FormBuilder) {
    this.buildForm();
  }
  buildForm() {
    this.userForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-z]{1,10}\s[a-z]{1,10}$/i)]],
      email: ['', [Validators.required, Validators.pattern(/^\w{2,10}@\w{2,10}.\w{2,10}$/)]],
      role: ['', [Validators.required, Validators.pattern(/^[a-z ]{1,20}$/i)]],
    });
  }

  updateNotEdit(field: EditableField) {
    this.isEditing[field].update((v) => !v);
  }
}
