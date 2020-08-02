import { takeUntil } from 'rxjs/operators';
import { FormInput } from '@nxc/ui/core';
import { Components } from '@nxc/ui/custom';
import {
  Host,
  Input,
  Optional,
  SkipSelf,
  AfterContentInit,
  HostBinding,
  forwardRef,
  ElementRef,
  HostListener,
  Component,
  OnDestroy,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  AbstractControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject } from 'rxjs';

type InputStatus = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';

@Component({
  selector: 'nxc-input, [nxcInput], [nxcInputHoist]',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputHoistDirective),
      multi: true,
    },
  ],
})
export class InputHoistDirective
  implements
    ControlValueAccessor,
    Partial<FormInput>,
    AfterContentInit,
    OnDestroy {
  destroy$ = new Subject<void>();

  element: Components.NxcInput;

  @Input() formControlName: string;
  @Input() formControl: AbstractControl;

  private _status: InputStatus;
  public get status() {
    return this._status;
  }
  public set status(value) {
    this._status = value;
  }

  @HostBinding('attr.invalid') get invalid() {
    return this.status === 'INVALID';
  }

  @HostBinding('attr.valid') get valid() {
    return this.status === 'VALID';
  }

  @HostBinding('disabled')
  private _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled || this.status === 'DISABLED';
  }
  public set disabled(value: boolean) {
    this._disabled = value;
  }

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
    @Optional()
    @Host()
    @SkipSelf()
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

      this.formControl.statusChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe((v) => (this.status = v));
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

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
