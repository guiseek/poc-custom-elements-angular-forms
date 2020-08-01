import { Output } from '@nxc/ui/core';

export interface EventEmitter<T = any> extends Output {
  emit: (data?: T) => CustomEvent<T>;
}
