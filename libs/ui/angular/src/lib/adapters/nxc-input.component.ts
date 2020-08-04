import { ControlValueAccessorHoist } from './../abstractions/control-value-accessor-hoist';
import { FormInput, InputStatus } from '@nxc/ui/core';
import { takeUntil } from 'rxjs/operators';
import { Components } from '@nxc/ui/custom';
import {
  Host,
  Optional,
  SkipSelf,
  HostBinding,
  forwardRef,
  ElementRef,
  Component,
  OnDestroy,
} from '@angular/core';
import {
  ControlContainer,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'nxc-input',
  template: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NxcInputComponent),
      multi: true,
    },
  ],
})
export class NxcInputComponent
  extends ControlValueAccessorHoist<Components.NxcInput>
  implements Partial<FormInput> {
  @HostBinding('attr.invalid') get invalid() {
    return this.status === 'INVALID';
  }

  @HostBinding('attr.valid') get valid() {
    return this.status === 'VALID';
  }

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    controlContainer: ControlContainer,
    elementRef: ElementRef<Components.NxcInput>
  ) {
    super(controlContainer, elementRef);
  }
}
