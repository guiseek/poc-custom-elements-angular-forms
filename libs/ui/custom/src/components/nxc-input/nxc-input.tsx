import { FormInput, EventEmitter, InputType, Size } from '@nxc/ui/core';

import {
  h,
  Prop,
  Event,
  Method,
  State,
  Element,
  Component,
} from '@stencil/core';

let id = 0;

@Component({
  tag: 'nxc-input',
  styleUrl: 'nxc-input.scss',
  shadow: true,
})
export class NxcInput implements FormInput {
  inputId = `input${++id}`;
  labelId = `input_label${id}`;
  helpTextId = `input_help_text${id}`;
  input: HTMLInputElement;

  @Element() host: HTMLNxcInputElement;

  @State() focused = false;
  @State() isPasswordVisible = false;

  @Prop() type: InputType = 'text';

  @Prop() size: Size = 'medium';

  @Prop() name = '';

  @Prop({ mutable: true }) value: string = '';

  @Prop() pill = false;

  @Prop() label = '';

  @Prop() placeholder: string;

  @Prop() disabled = false;

  @Prop() readonly = false;

  @Prop() minlength: number;

  @Prop() maxlength: number;

  @Prop() min: number;

  @Prop() max: number;

  @Prop() step: number;

  @Prop() autofocus: boolean;

  @Prop() pattern: string;

  @Prop() required: boolean;

  @Prop() clearable = false;

  @Prop() togglePassword = false;

  @Prop() valid = false;

  @Prop() invalid = false;

  @Event() valueChange: EventEmitter<any>;

  @Event() focusChange: EventEmitter<any>;

  @Event() blurChange: EventEmitter<any>;

  connectedCallback() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
  }

  /** Coloca foco no elemento. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Remove o foco do elemento. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  /** Seleciona todo texto do input. */
  @Method()
  async select() {
    return this.input.select();
  }

  handleChange() {
    if (this.value) {
      this.valueChange.emit(this.value);
    }
  }

  handleInput() {
    this.value = this.input.value;
    this.valueChange.emit(this.value);
    // this.focusChange.emit({ detail: this.value });
  }

  handleBlur() {
    this.focused = false;
    this.blurChange.emit();
  }

  handleFocus() {
    this.focused = true;
    this.focusChange.emit();
  }

  handleClearClick() {
    if (this.input.value !== '') {
      this.input.value = '';
      this.input.dispatchEvent(new window.Event('input', { bubbles: true }));
      this.input.dispatchEvent(new window.Event('change', { bubbles: true }));
    }

    this.input.focus();
  }

  handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target !== this.input) {
      event.preventDefault();
      this.input.focus();
    }
  }

  handlePasswordToggle() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  render() {
    return (
      <div
        part="form-control"
        class={{
          'form-control': true,
          'form-control--has-label': this.label.length > 0,
          'form-control--valid': this.valid,
          'form-control--invalid': this.invalid,
        }}
      >
        <label
          part="label"
          class={{
            label: true,
            'label--small': this.size === 'small',
            'label--medium': this.size === 'medium',
            'label--large': this.size === 'large',
            'label--valid': this.valid,
            'label--invalid': this.invalid,
          }}
          htmlFor={this.inputId}
        >
          {this.label}
        </label>

        <div
          part="base"
          class={{
            input: true,

            // Sizes
            'input--small': this.size === 'small',
            'input--medium': this.size === 'medium',
            'input--large': this.size === 'large',

            // States
            'input--pill': this.pill,
            'input--disabled': this.disabled,
            'input--focused': this.focused,
            'input--empty': this.value.length === 0,
            'input--valid': this.valid,
            'input--invalid': this.invalid,
          }}
          onMouseDown={this.handleMouseDown}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix" />
          </span>

          <input
            part="input"
            ref={(el) => (this.input = el)}
            id={this.inputId}
            class="input__control"
            type={
              this.type === 'password' && this.isPasswordVisible
                ? 'text'
                : this.type
            }
            name={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readonly={this.readonly}
            minLength={this.minlength}
            maxLength={this.maxlength}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            autoFocus={this.autofocus}
            pattern={this.pattern}
            required={this.required}
            aria-labelledby={this.labelId}
            aria-describedby={this.helpTextId}
            onChange={this.handleChange}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          {this.clearable && (
            <button
              part="clear-button"
              class="input__clear"
              type="button"
              onClick={this.handleClearClick}
              tabindex="-1"
            >
              <slot name="clear-icon">
                <nxc-icon name="x-circle" />
              </slot>
            </button>
          )}

          {this.togglePassword && (
            <button
              part="password-toggle-button"
              class="input__password-toggle"
              type="button"
              onClick={this.handlePasswordToggle}
              tabindex="-1"
            >
              {this.isPasswordVisible ? (
                <slot name="show-password-icon">
                  <nxc-icon name="eye-slash" />
                </slot>
              ) : (
                <slot name="hide-password-icon">
                  {' '}
                  <nxc-icon name="eye" />
                </slot>
              )}
            </button>
          )}

          <span part="suffix" class="input__suffix">
            <slot name="suffix" />
          </span>
        </div>

        <div
          part="help-text"
          id={this.helpTextId}
          class={{
            'help-text': true,
            'help-text--small': this.size === 'small',
            'help-text--medium': this.size === 'medium',
            'help-text--large': this.size === 'large',
            'help-text--valid': this.valid,
            'help-text--invalid': this.invalid,
          }}
        >
          <slot name="help-text" />
        </div>
      </div>
    );
  }
}
