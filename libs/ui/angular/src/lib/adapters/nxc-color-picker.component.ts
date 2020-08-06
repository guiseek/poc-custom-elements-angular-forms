import { ControlValueAccessorHoist } from '../abstractions/control-value-accessor-hoist';
import { Component, forwardRef, Optional, Host, SkipSelf, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { Components } from '@nxc/ui/custom';

@Component({
  selector: 'nxc-color-picker',
  template: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NxcColorPickerComponent),
      multi: true,
    },
  ],
})
export class NxcColorPickerComponent
  extends ControlValueAccessorHoist<Components.NxcInput> {

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
