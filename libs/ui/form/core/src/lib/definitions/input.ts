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

  /** Set to true to draw a pill-style input with rounded edges. */
  pill: boolean;

  /** The input's placeholder text. */
  placeholder: string;

  /** Set to true to disable the input. */
  disabled: boolean;

  /** Set to true for a readonly input. */
  readonly: boolean;

  /** The input's minlength attribute. */
  minlength: number;

  /** The input's maxlength attribute. */
  maxlength: number;

  /** The input's min attribute. */
  min: number;

  /** The input's max attribute. */
  max: number;

  /** The input's step attribute. */
  step: number;

  /** The input's autofocus attribute. */
  autofocus: boolean;

  /** The input's pattern attribute. */
  pattern: string;

  /** The input's required attribute. */
  required: boolean;

  valid: boolean;

  /** Set to true to indicate that the user input is invalid. */
  invalid: boolean;

  focused: boolean;

  valueChange: EventEmitter;

  focusChange: EventEmitter;

  blurChange: EventEmitter;
}
