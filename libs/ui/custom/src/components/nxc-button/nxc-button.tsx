import { Component, h, Prop, Event, Method, State } from '@stencil/core';
import { Button, EventEmitter, ButtonType, Size } from '@nxc/ui/core';

@Component({
  tag: 'nxc-button',
  styleUrl: 'nxc-button.scss',
  shadow: true,
})
export class NxcButton implements Button {
  button: HTMLButtonElement;

  @State() hasFocus = false;

  @Prop() type: ButtonType = 'default';

  @Prop() size: Size = 'medium';

  @Prop() caret: boolean;

  @Prop() disabled: boolean;

  @Prop() loading: boolean;

  @Prop() name: string;

  @Prop() pill: boolean;

  @Prop() circle: boolean;

  @Prop() value: string;

  @Prop() submit: boolean;

  @Event() nxcBlur: EventEmitter;

  @Event() nxcFocus: EventEmitter;


  connectedCallback() {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /** Sets focus on the button. */
  @Method()
  async setFocus() {
    this.button.focus();
  }

  /** Removes focus from the button. */
  @Method()
  async removeFocus() {
    this.button.blur();
  }

  handleBlur() {
    this.hasFocus = false;
    this.nxcBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.nxcFocus.emit();
  }

  handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    return (
      <button
        ref={el => (this.button = el)}
        part="base"
        class={{
          button: true,

          // Types
          'button--default': this.type === 'default',
          'button--primary': this.type === 'primary',
          'button--success': this.type === 'success',
          'button--info': this.type === 'info',
          'button--warning': this.type === 'warning',
          'button--danger': this.type === 'danger',
          'button--text': this.type === 'text',

          // Sizes
          'button--small': this.size === 'small',
          'button--medium': this.size === 'medium',
          'button--large': this.size === 'large',

          // Modifiers
          'button--caret': this.caret,
          'button--circle': this.circle,
          'button--disabled': this.disabled,
          'button--focused': this.hasFocus,
          'button--loading': this.loading,
          'button--pill': this.pill
        }}
        name={this.name}
        value={this.value}
        disabled={this.disabled}
        type={this.submit ? 'submit' : 'button'}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onClick={this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix" />
        </span>
        <span part="label" class="button__label">
          <slot />
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix" />
        </span>
        {this.caret && (
          <span part="caret" class="button__caret">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        )}

        {this.loading && <nxc-spinner />}
      </button>
    );
  }
}
