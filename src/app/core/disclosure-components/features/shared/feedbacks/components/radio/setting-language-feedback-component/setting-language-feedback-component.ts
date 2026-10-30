import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LanguageSetting } from '../../../../../../../../interfaces/disclosure/settings-interfaces/radio-group-disclosure-settings';
import { FormattedDateTime, LANGUAGE_TRANSLATIONS } from './constant-language-feedback';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-setting-language-feedback-component',
  styleUrl: './setting-language-feedback-component.css',
  templateUrl: './setting-language-feedback-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingLanguageFeedbackComponent {
  languagePayload = input.required<LanguageSetting>();
  userName = computed(() => (this.languagePayload() === 'english' ? 'Mohamed' : 'محمد'));
  timeUpdater = toSignal(interval(1000), { initialValue: 0 });

  formattedDateTime = computed<FormattedDateTime>(() => {
    this.timeUpdater();
    const locale = this.languagePayload() === 'arabic' ? 'ar-EG' : 'en-US';
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = currentDate.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return {
      formattedDate,
      formattedTime,
    };
  });

  translations = computed(() => LANGUAGE_TRANSLATIONS[this.languagePayload()]);
}
