import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nxc-menu-item',
  styleUrl: 'nxc-menu-item.scss',
  shadow: true,
})
export class NxcMenuItem {

  @Prop() checked = false;

  @Prop() active = false;

  @Prop() value = '';

  @Prop() disabled = false;

  render() {
    return (
      <div
        part="base"
        class={{
          'menu-item': true,
          'menu-item--checked': this.checked,
          'menu-item--active': this.active,
          'menu-item--disabled': this.disabled
        }}
        role="menuitem"
        aria-checked={this.checked}
        aria-disabled={this.disabled}
        aria-selected={this.active}
      >
        <span part="checked-icon" class="menu-item__check">
          <nxc-icon name="check2" />
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix" />
        </span>

        <span part="label" class="menu-item__label">
          <slot />
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix" />
        </span>
      </div>
    );
  }
}
