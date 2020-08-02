import { FormInput } from '@nxc/ui/form/core';
import { Components } from '@nxc/ui/form/custom';
import {
  Directive,
  Input,
  Optional,
  Host,
  SkipSelf,
  AfterContentInit,
  HostBinding,
  forwardRef,
  ElementRef,
  HostListener,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  AbstractControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Directive({
  selector: '[nxcInput], [nxcInputHoist]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputHoistDirective),
      multi: true,
    },
  ],
})
export class InputHoistDirective implements ControlValueAccessor,
  Partial<FormInput>, AfterContentInit {

  element: Components.NxcInput;

  @Input() formControlName: string;
  @Input() formControl: AbstractControl;

  @HostBinding() disabled: boolean;

  @HostBinding('value')
  private _value: any;
  get value() {
    return this._value;
  }
  set value(val) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(this._value);
      this.onTouched();
    }
  }

  @HostListener('valueChange', ['$event.detail'])
  valueChangeListener(value: any) {
    this.value = value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
    private elementRef: ElementRef<Components.NxcInput>
  ) {}

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterContentInit() {
    if (this.elementRef) {
      this.element = this.getCustom(this.elementRef);
    }

    if (this.formControlName) {
      this.formControl = this.getControl(this.controlContainer);
    }
  }
  getCustom({ nativeElement }: ElementRef) {
    if (!nativeElement) {
      throw new Error(
        'Custom element not found, defineCustomElements was added?'
      );
    }
    return nativeElement;
  }
  getControl({ control }: ControlContainer) {
    if (!control) {
      throw new Error(
        'Control container not found, formGroup directive was added?'
      );
    }
    return control.get(this.formControlName);
  }
}
