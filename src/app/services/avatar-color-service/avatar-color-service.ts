import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AvatarColorService {
  private avatarColors: string[] = ['#5B21B6', '#4338CA', '#0E7490', '#B45309', '#BE123C'];

  hashStringToIndex(str: string, arrayLength: number): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + hash * 31;
    }
    return Math.abs(hash) % arrayLength;
  }

  getAvatarColor(name: string): string {
    const index = this.hashStringToIndex(name, this.avatarColors.length);
    return this.avatarColors[index];
  }
}
