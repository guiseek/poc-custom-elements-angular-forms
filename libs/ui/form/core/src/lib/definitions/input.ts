import { Input, ID, Size } from '@nxc/ui/core';
import { InputType } from './input-type';
import { EventEmitter } from './event-emitter';

export interface FormInput extends Input {
  inputId: ID;

  input: HTMLInputElement;

  type: InputType;

  size: Size;

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

  valueChange: EventEmitter<any>;

  focusChange: EventEmitter<any>;

  blurChange: EventEmitter<any>;
}
