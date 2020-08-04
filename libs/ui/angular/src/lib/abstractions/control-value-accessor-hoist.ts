import { Subject } from 'rxjs';
import {
  ControlValueAccessor,
  AbstractControl,
  ControlContainer,
} from '@angular/forms';
import {
  Input,
  HostBinding,
  HostListener,
  AfterContentInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { InputStatus } from '@nxc/ui/core';
import { takeUntil } from 'rxjs/operators';

type ControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export abstract class ControlValueAccessorHoist<E = ControlElement>
  implements ControlValueAccessor, AfterContentInit, OnDestroy {

  element: E;

  destroy$ = new Subject<void>();

  @Input() formControlName: string;
  @Input() formControl: AbstractControl;

  /**
   * Form Control Status
   *
   * @protected
   * @type {InputStatus}
   * @memberof ControlValueAccessorHoist
   */
  protected _status: InputStatus;
  public get status() {
    return this._status;
  }
  public set status(value) {
    this._status = value;
  }

  /**
   * Form Control state
   *
   * @type {boolean}
   * @memberof ControlValueAccessorHoist
   */
  public get disabled(): boolean {
    return this._disabled || this.status === 'DISABLED';
  }
  public set disabled(value: boolean) {
    this._disabled = value;
  }
  protected _disabled: boolean;

  /**
   * Control `value` accessor hoist
   *
   * @protected
   * @type {*}
   * @memberof ControlValueAccessorHoist
   */
  @HostBinding('value')
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
  protected _value: any;

  /**
   * Control Value Accessor Listener
   *
   * @param {*} value
   * @memberof ControlValueAccessorHoist
   */
  @HostListener('valueChange', ['$event.detail'])
  valueChangeListener(value: any) {
    this.value = value;
  }

  constructor(
    protected controlContainer: ControlContainer,
    protected elementRef: ElementRef<E>
  ) {}

  onChange: any = () => {};
  onTouched: any = () => {};

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
