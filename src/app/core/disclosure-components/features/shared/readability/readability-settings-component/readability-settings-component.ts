import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  input,
  output,
  Renderer2,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  combineLatest,
  distinctUntilChanged,
  fromEvent,
  map,
  merge,
  of,
  repeat,
  startWith,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReadabilitySettingsMetaData } from '../../../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';
import {
  FeedbackData,
  PreviewPosition,
} from '../../../../../../interfaces/disclosure/global-interfaces/global-settings';
import { SettingsFeedbackResolverComponent } from '../../feedbacks/settings-feedback-resolver-component/settings-feedback-resolver-component';
import { NgTemplateOutlet } from '@angular/common';
import { FEEDBACK_PREVIEW_POSITION } from '../../../../../../constants/feedback-preview-position';

@Component({
  imports: [FontAwesomeModule, SettingsFeedbackResolverComponent, NgTemplateOutlet],
  selector: 'app-readability-settings-component',
  styleUrl: './readability-settings-component.css',
  templateUrl: './readability-settings-component.html',
})
export class ReadabilitySettingsComponent {
  readabilitySettingData = input.required<ReadabilitySettingsMetaData>();
  readabilityFeedbackData = input.required<FeedbackData>();
  previewPosition = computed<PreviewPosition>(
    () => FEEDBACK_PREVIEW_POSITION[this.readabilityFeedbackData().feedbackType],
  );
  onSettingRangeValue = output<number>();

  left = computed(() => `${this.readabilitySettingData().settingRangeValue - 100}%`);

  rangeInputRef = viewChild<ElementRef>('rangeInputRef');
  spanToolTip = viewChild<ElementRef>('spanToolTip');

  constructor(
    private renderer: Renderer2,
    private destroyRef: DestroyRef,
  ) {
    afterNextRender(() => {
      const pointerUp$ = fromEvent(this.rangeInputRef()!.nativeElement, 'pointerup').pipe(
        map(() => true),
      );
      const pointerDown$ = fromEvent(this.rangeInputRef()!.nativeElement, 'pointerdown').pipe(
        map(() => true),
      );

      const onMouseMove$ = fromEvent<MouseEvent>(
        this.rangeInputRef()!.nativeElement,
        'mousemove',
      ).pipe(map((event) => this.isThumbTouched(event.clientX)));

      const onMouseLeave$ = fromEvent<MouseEvent>(
        this.rangeInputRef()!.nativeElement,
        'mouseleave',
      ).pipe(map(() => false));

      const focus$ = fromEvent<KeyboardEvent>(this.rangeInputRef()!.nativeElement, 'focus').pipe(
        map(() => true),
      );

      const blur$ = fromEvent<KeyboardEvent>(this.rangeInputRef()!.nativeElement, 'blur').pipe(
        map(() => false),
      );

      const hovering$ = merge(onMouseMove$, onMouseLeave$).pipe(
        distinctUntilChanged(),
        switchMap((isThumbTouched) => {
          return isThumbTouched ? timer(500).pipe(map(() => isThumbTouched)) : of(false);
        }),
        takeUntilDestroyed(this.destroyRef),
      );

      const focusing$ = merge(focus$, blur$, pointerDown$);

      combineLatest([hovering$.pipe(startWith(false)), focusing$.pipe(startWith(false))])
        .pipe(
          map(([isHovering, isFocusing]) => {
            return isHovering || isFocusing;
          }),
          takeUntil(pointerUp$),
          repeat(),
          distinctUntilChanged(),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe((show) => {
          if (show) {
            this.displayToolTip();
          } else {
            this.hideToolTip();
          }
        });
    });
  }
  isThumbTouched(clientX: number): boolean {
    const trackWidth = this.rangeInputRef()?.nativeElement.getBoundingClientRect()['width'];
    const trackLeftPosition = this.rangeInputRef()?.nativeElement.getBoundingClientRect()['left'];
    const thumbWidth = 24 as const;
    const thumbHalfWidth = 12 as const;
    const rangePercent = (this.readabilitySettingData().settingRangeValue - 100) / 100;
    const thumbXPositionOnRangeInput = thumbHalfWidth + rangePercent * (trackWidth - thumbWidth);
    const exactMouseXPosition = clientX - trackLeftPosition;
    return Math.abs(exactMouseXPosition - thumbXPositionOnRangeInput) <= thumbHalfWidth;
  }

  displayToolTip() {
    this.renderer.removeClass(this.spanToolTip()?.nativeElement, 'hidden');
  }
  hideToolTip() {
    this.renderer.addClass(this.spanToolTip()?.nativeElement, 'hidden');
  }

  onRangeValue(event: InputEvent) {
    const value: number = Number((event.target as HTMLInputElement).value);
    this.onSettingRangeValue.emit(value);
  }
}
