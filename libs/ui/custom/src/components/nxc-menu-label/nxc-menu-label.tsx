import { Component, h } from '@stencil/core';

@Component({
  tag: 'nxc-menu-label',
  styleUrl: 'nxc-menu-label.scss',
  shadow: true,
})
export class NxcMenuLabel {
  render() {
    return (
      <div part="base" class="menu-label">
        <slot />
      </div>
    );
  }
}
