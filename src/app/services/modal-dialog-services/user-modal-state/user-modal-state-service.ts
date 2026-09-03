import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../../interfaces/user';
import { ModalInteraction } from '../../../types/generalTypes';

@Injectable({
  providedIn: 'root',
})
export class UserModalStateService {
  private _modalInteraction = signal<ModalInteraction | null>(null);
  isModalOpen = computed<boolean>(() => !!this._modalInteraction());
  // activeElement = computed<HTMLButtonElement | null>(() => this._activeElement());

  private _userData = signal<User | null>(null);
  private _userId = signal<string | null>(null);
  private _userName = signal<string | null>(null);
  private _activeElement = signal<HTMLButtonElement | null>(null);

  readonly modalInteraction = this._modalInteraction.asReadonly();
  readonly userData = this._userData.asReadonly();
  readonly userid = this._userId.asReadonly();
  readonly userName = this._userName.asReadonly();
  readonly activeElement = this._activeElement.asReadonly();
  openAddModal() {
    this._modalInteraction.set('add');
    this._activeElement.set(document.activeElement as HTMLButtonElement);
  }

  openEditModal(userData: User) {
    this._modalInteraction.set('edit');
    this._userData.set(userData);
    this._activeElement.set(document.activeElement as HTMLButtonElement);
  }
  openDeleteModal(userId: string, userName: string) {
    this._userId.set(userId);
    this._userName.set(userName);
    this._modalInteraction.set('delete');
    this._activeElement.set(document.activeElement as HTMLButtonElement);
  }

  clearModal() {
    this._modalInteraction.set(null);
    this._userData.set(null);
    this._userId.set(null);
  }
}
