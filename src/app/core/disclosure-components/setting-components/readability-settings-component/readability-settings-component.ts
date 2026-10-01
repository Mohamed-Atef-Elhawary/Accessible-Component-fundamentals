import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  input,
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
import { ReadabilitySettingData } from '../../../../interfaces/disclosure/settings-interfaces/readability-disclosure-settings';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-readability-settings-component',
  styleUrl: './readability-settings-component.css',
  templateUrl: './readability-settings-component.html',
  host: { class: 'block' },
})
export class ReadabilitySettingsComponent {
  readabilitySettingData = input.required<ReadabilitySettingData>();

  settingScaleFactore = computed(
    () => `${this.readabilitySettingData().settingRangeValue() + 100}%`,
  );

  previewStyle = computed(() => {
    const value = this.settingScaleFactore();
    const key = this.readabilitySettingData().cssProperty;
    return {
      [key]: value,
    };
  });

  rangeInputRef = viewChild<ElementRef>('rangeInputRef');
  spanToolTip = viewChild<ElementRef>('spanToolTip');

  constructor(
    private rendere: Renderer2,
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

      const hovring$ = merge(onMouseMove$, onMouseLeave$).pipe(
        distinctUntilChanged(),
        switchMap((isThumbTouched) => {
          return isThumbTouched ? timer(500).pipe(map(() => isThumbTouched)) : of(false);
        }),
        takeUntilDestroyed(this.destroyRef),
      );

      const focusing$ = merge(focus$, blur$, pointerDown$);

      combineLatest([hovring$.pipe(startWith(false)), focusing$.pipe(startWith(false))])
        .pipe(
          map(([isHovring, isFocuing]) => {
            return isHovring || isFocuing;
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
    const rangePercent = this.readabilitySettingData().settingRangeValue() / 100;
    const thumbXPositionOnRangeInput = thumbHalfWidth + rangePercent * (trackWidth - thumbWidth);
    const exactMouseXPosition = clientX - trackLeftPosition;
    return Math.abs(exactMouseXPosition - thumbXPositionOnRangeInput) <= thumbHalfWidth;
  }

  displayToolTip() {
    this.rendere.removeClass(this.spanToolTip()?.nativeElement, 'hidden');
  }
  hideToolTip() {
    this.rendere.addClass(this.spanToolTip()?.nativeElement, 'hidden');
  }

  onRangeValue(event: InputEvent) {
    const value: number = Number((event.target as HTMLInputElement).value);
    this.readabilitySettingData().settingRangeValue.set(value);
  }
}
