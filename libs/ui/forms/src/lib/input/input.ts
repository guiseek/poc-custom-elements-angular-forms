import { Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export class InputBase {
  @Input() formControlName: string;
  @Input() formControl: AbstractControl;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public set appearance(value) {
    this._appearance = value;
  }
  public get appearance() {
    return this._appearance;
  }
  private _appearance: 'legacy' | 'standard' | 'fill' | 'outline';

  @Input()
  public set label(value: string) {
    this._label = value;
  }
  public get label(): string {
    return this._label;
  }
  protected _label: string;

  @Input()
  public set placeholder(value: string) {
    this._placeholder = value;
  }
  public get placeholder(): string {
    return this._placeholder;
  }
  protected _placeholder: string;

  @Input()
  public set value(value: any) {
    this._value = value;
  }
  public get value(): any {
    return this._value;
  }
  protected _value: any;

  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
  }
  public get disabled(): boolean {
    return this._disabled;
  }
  protected _disabled: boolean;

  @Input()
  public set readonly(value: boolean) {
    this._readonly = value;
  }
  public get readonly(): boolean {
    return this._readonly;
  }
  protected _readonly: boolean;
}
