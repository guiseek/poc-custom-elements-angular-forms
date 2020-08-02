import { Component, h, Prop } from '@stencil/core';
import { focusVisible } from '../../utils/focus-visible';

@Component({
  tag: 'nxc-icon-button',
  styleUrl: 'nxc-icon-button.scss',
  shadow: true,
})
export class NxcIconButton {
  button: HTMLButtonElement;

  @Prop() name: string;

  @Prop() src: string;

  @Prop() label: string;

  @Prop() disabled = false;

  componentDidLoad() {
    focusVisible.observe(this.button);
  }

  componentDidUnload() {
    focusVisible.unobserve(this.button);
  }

  render() {
    return (
      <button
        ref={(el) => (this.button = el)}
        part="base"
        class={{
          'icon-button': true,
          'icon-button--disabled': this.disabled,
        }}
        type="button"
      >
        <nxc-icon name={this.name} src={this.src} label={this.label} />
      </button>
    );
  }
}
