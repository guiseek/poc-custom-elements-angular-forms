import { ComponentType } from '../component-type';
import { EventEmitter } from '../../event-emitter';

export interface Alert {
  open: boolean;

  closable: boolean;

  type: ComponentType;

  nxcShow: EventEmitter;
  nxcAfterShow: EventEmitter;

  nxcHide: EventEmitter;
  nxcAfterHide: EventEmitter;
}
