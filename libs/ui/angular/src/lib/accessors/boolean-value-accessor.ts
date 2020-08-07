import { Component, Injector, ElementRef, HostListener } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  CheckboxControlValueAccessor,
} from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Component({
  selector: 'input[type="checkbox"],nxc-input[type="checkbox"]',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessor,
      multi: true,
    },
  ],
})
export class BooleanValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef<HTMLInputElement>) {
    super(injector, el);
  }

  writeValue(value: any) {
    this.el.nativeElement.checked = this.lastValue =
      value == null ? false : value;
  }

  @HostListener('valueChaneg', ['$event.target'])
  _handleChangeEvent(el: any) {
    this.handleChangeEvent(el, el.checked);
  }
}
