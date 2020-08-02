import { Output } from './output';

export interface EventEmitter<T = any> extends Output {
  emit: (data?: T) => CustomEvent<T> | any;
}
