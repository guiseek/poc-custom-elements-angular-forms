/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { InputType } from '@nxc/ui/form/core';
export namespace Components {
  interface NxcInput {
    autofocus: boolean;
    clearable: boolean;
    disabled: boolean;
    invalid: boolean;
    label: string;
    max: number;
    maxlength: number;
    min: number;
    minlength: number;
    name: string;
    pattern: string;
    pill: boolean;
    placeholder: string;
    readonly: boolean;
    /**
     * Remove o foco do elemento.
     */
    removeFocus: () => Promise<void>;
    required: boolean;
    /**
     * Seleciona todo texto do input.
     */
    select: () => Promise<void>;
    /**
     * Coloca foco no elemento.
     */
    setFocus: () => Promise<void>;
    size: string;
    step: number;
    togglePassword: boolean;
    type: InputType;
    valid: boolean;
    value: string;
  }
}
declare global {
  interface HTMLNxcInputElement
    extends Components.NxcInput,
      HTMLStencilElement {}
  var HTMLNxcInputElement: {
    prototype: HTMLNxcInputElement;
    new (): HTMLNxcInputElement;
  };
  interface HTMLElementTagNameMap {
    'nxc-input': HTMLNxcInputElement;
  }
}
declare namespace LocalJSX {
  interface NxcInput {
    autofocus?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    label?: string;
    max?: number;
    maxlength?: number;
    min?: number;
    minlength?: number;
    name?: string;
    onBlurChange?: (event: CustomEvent<any>) => void;
    onFocusChange?: (event: CustomEvent<any>) => void;
    onValueChange?: (event: CustomEvent<any>) => void;
    pattern?: string;
    pill?: boolean;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: string;
    step?: number;
    togglePassword?: boolean;
    type?: InputType;
    valid?: boolean;
    value?: string;
  }
  interface IntrinsicElements {
    'nxc-input': NxcInput;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'nxc-input': LocalJSX.NxcInput &
        JSXBase.HTMLAttributes<HTMLNxcInputElement>;
    }
  }
}
