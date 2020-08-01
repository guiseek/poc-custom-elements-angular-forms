import { Component, OnInit, EventEmitter, Optional, SkipSelf, Host, forwardRef } from '@angular/core';
import { FormInput } from '@nxc/ui/form/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'nxc-input',
  template: `<input [formControl]="ngControl"  />`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor, FormInput, OnInit {
  ngControl = new FormControl();
  constructor() {
    this.valueChange
  }
  writeValue(obj: any): void {
    console.log(obj);
    
    // throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    console.log(fn);
    // throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    console.log(fn);
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
    // throw new Error("Method not implemented.");
  }
  inputId: '';
  input: HTMLInputElement;
  type = 'text';
  size = '';
  value: any;
  name: string;
  label: string;
  pill: boolean;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  minlength: number;
  maxlength: number;
  min: number;
  max: number;
  step: number;
  autofocus: boolean;
  pattern: string;
  required: boolean;
  valid: boolean;
  invalid: boolean;
  focused: boolean;
  valueChange = new EventEmitter();
  focusChange = new EventEmitter()
  blurChange = new EventEmitter();

  ngOnInit(): void {
  }

}
