import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  Host,
  Optional,
  SkipSelf,
  forwardRef,
  AfterContentInit,
} from '@angular/core';
import {
  ControlContainer,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

const inputTriggers = ['valueChange', 'focusChange', 'blurChange'];


/**
 * @deprecated
 * Evento já capturado em ./input-hoist.directive.ts
 *
 * @export
 * @class CustomOutputHoistDirective
 */
@Directive({
  selector: '[nxcCustomOutputHoist]',
})
export class CustomOutputHoistDirective {
  @Input('nxcCustomOutputHoist') triggers: string[] = inputTriggers;

  @Output() valueChange = new EventEmitter();
  @Output() focusChange = new EventEmitter();
  @Output() blurChange = new EventEmitter();

  constructor(private hoist: ElementRef<Element>) {
    this.attachTriggers(this.triggers);
  }

  attachTriggers(events: string[]) {
    events
      .filter((evt) => inputTriggers.includes(evt))
      .forEach((trigger) => {
        this.hoist.nativeElement.addEventListener(
          trigger,
          ({ detail }: CustomEvent) => this[trigger].emit(detail)
        );
      });
  }
}
