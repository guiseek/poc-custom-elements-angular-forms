export interface ElementConstructor extends Partial<CustomElementConstructor> {
  template?: string;
  styles?: string;
  mode?: 'open' | 'closed';
  delegatesFocus?: boolean;
}
