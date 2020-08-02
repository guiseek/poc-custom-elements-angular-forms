import { EventEmitter } from '../../event-emitter';
import { Size } from '../../size';
import { ButtonType } from './button-type';

export interface Button {
  type: ButtonType;

  size: Size;

  caret: boolean;

  disabled: boolean;

  loading: boolean;

  name: string;

  pill: boolean;

  circle: boolean;

  value: string;

  submit: boolean;

  nxcBlur: EventEmitter;

  nxcFocus: EventEmitter;
}
