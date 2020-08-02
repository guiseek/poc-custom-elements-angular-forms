/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonType, ComponentType, InputType, Size } from "@nxc/ui/core";
export namespace Components {
    interface NxcAlert {
        "closable": boolean;
        "hide": () => Promise<boolean>;
        "open": boolean;
        "show": () => Promise<boolean>;
        "type": ComponentType;
    }
    interface NxcButton {
        "caret": boolean;
        "circle": boolean;
        "disabled": boolean;
        "loading": boolean;
        "name": string;
        "pill": boolean;
        /**
          * Removes focus from the button.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the button.
         */
        "setFocus": () => Promise<void>;
        "size": Size;
        "submit": boolean;
        "type": ButtonType;
        "value": string;
    }
    interface NxcIcon {
        /**
          * The icon label
         */
        "label": string;
        /**
          * The icon name
         */
        "name": string;
        /**
          * The icon path
         */
        "src": string;
    }
    interface NxcIconButton {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NxcInput {
        "autofocus": boolean;
        "clearable": boolean;
        "disabled": boolean;
        "invalid": boolean;
        "label": string;
        "max": number;
        "maxlength": number;
        "min": number;
        "minlength": number;
        "name": string;
        "pattern": string;
        "pill": boolean;
        "placeholder": string;
        "readonly": boolean;
        /**
          * Remove o foco do elemento.
         */
        "removeFocus": () => Promise<void>;
        "required": boolean;
        /**
          * Seleciona todo texto do input.
         */
        "select": () => Promise<void>;
        /**
          * Coloca foco no elemento.
         */
        "setFocus": () => Promise<void>;
        "size": Size;
        "step": number;
        "togglePassword": boolean;
        "type": InputType;
        "valid": boolean;
        "value": string;
    }
}
declare global {
    interface HTMLNxcAlertElement extends Components.NxcAlert, HTMLStencilElement {
    }
    var HTMLNxcAlertElement: {
        prototype: HTMLNxcAlertElement;
        new (): HTMLNxcAlertElement;
    };
    interface HTMLNxcButtonElement extends Components.NxcButton, HTMLStencilElement {
    }
    var HTMLNxcButtonElement: {
        prototype: HTMLNxcButtonElement;
        new (): HTMLNxcButtonElement;
    };
    interface HTMLNxcIconElement extends Components.NxcIcon, HTMLStencilElement {
    }
    var HTMLNxcIconElement: {
        prototype: HTMLNxcIconElement;
        new (): HTMLNxcIconElement;
    };
    interface HTMLNxcIconButtonElement extends Components.NxcIconButton, HTMLStencilElement {
    }
    var HTMLNxcIconButtonElement: {
        prototype: HTMLNxcIconButtonElement;
        new (): HTMLNxcIconButtonElement;
    };
    interface HTMLNxcInputElement extends Components.NxcInput, HTMLStencilElement {
    }
    var HTMLNxcInputElement: {
        prototype: HTMLNxcInputElement;
        new (): HTMLNxcInputElement;
    };
    interface HTMLElementTagNameMap {
        "nxc-alert": HTMLNxcAlertElement;
        "nxc-button": HTMLNxcButtonElement;
        "nxc-icon": HTMLNxcIconElement;
        "nxc-icon-button": HTMLNxcIconButtonElement;
        "nxc-input": HTMLNxcInputElement;
    }
}
declare namespace LocalJSX {
    interface NxcAlert {
        "closable"?: boolean;
        "onNxcAfterHide"?: (event: CustomEvent<any>) => void;
        "onNxcAfterShow"?: (event: CustomEvent<any>) => void;
        "onNxcHide"?: (event: CustomEvent<any>) => void;
        "onNxcShow"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "type"?: ComponentType;
    }
    interface NxcButton {
        "caret"?: boolean;
        "circle"?: boolean;
        "disabled"?: boolean;
        "loading"?: boolean;
        "name"?: string;
        "onNxcBlur"?: (event: CustomEvent<any>) => void;
        "onNxcFocus"?: (event: CustomEvent<any>) => void;
        "pill"?: boolean;
        "size"?: Size;
        "submit"?: boolean;
        "type"?: ButtonType;
        "value"?: string;
    }
    interface NxcIcon {
        /**
          * The icon label
         */
        "label"?: string;
        /**
          * The icon name
         */
        "name"?: string;
        /**
          * Emitted when the icon failed to load.
         */
        "onNxcError"?: (event: CustomEvent<any>) => void;
        "onNxcLoad"?: (event: CustomEvent<any>) => void;
        /**
          * The icon path
         */
        "src"?: string;
    }
    interface NxcIconButton {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NxcInput {
        "autofocus"?: boolean;
        "clearable"?: boolean;
        "disabled"?: boolean;
        "invalid"?: boolean;
        "label"?: string;
        "max"?: number;
        "maxlength"?: number;
        "min"?: number;
        "minlength"?: number;
        "name"?: string;
        "onBlurChange"?: (event: CustomEvent<any>) => void;
        "onFocusChange"?: (event: CustomEvent<any>) => void;
        "onValueChange"?: (event: CustomEvent<any>) => void;
        "pattern"?: string;
        "pill"?: boolean;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "size"?: Size;
        "step"?: number;
        "togglePassword"?: boolean;
        "type"?: InputType;
        "valid"?: boolean;
        "value"?: string;
    }
    interface IntrinsicElements {
        "nxc-alert": NxcAlert;
        "nxc-button": NxcButton;
        "nxc-icon": NxcIcon;
        "nxc-icon-button": NxcIconButton;
        "nxc-input": NxcInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nxc-alert": LocalJSX.NxcAlert & JSXBase.HTMLAttributes<HTMLNxcAlertElement>;
            "nxc-button": LocalJSX.NxcButton & JSXBase.HTMLAttributes<HTMLNxcButtonElement>;
            "nxc-icon": LocalJSX.NxcIcon & JSXBase.HTMLAttributes<HTMLNxcIconElement>;
            "nxc-icon-button": LocalJSX.NxcIconButton & JSXBase.HTMLAttributes<HTMLNxcIconButtonElement>;
            "nxc-input": LocalJSX.NxcInput & JSXBase.HTMLAttributes<HTMLNxcInputElement>;
        }
    }
}
