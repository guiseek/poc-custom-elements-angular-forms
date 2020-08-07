import { Component, Injector, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Component({
  selector: 'input[type="number"], nxc-input[type="number"]',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessor,
      multi: true
    }
  ]
})
export class NumericValueAccessor extends ValueAccessor {

  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('valueChange', ['$event.target'])
  handleChange(el: any) {
    this.handleChangeEvent(el, el.value);
  }

  registerOnChange(fn: (_: number | null) => void) {
    super.registerOnChange(value => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
