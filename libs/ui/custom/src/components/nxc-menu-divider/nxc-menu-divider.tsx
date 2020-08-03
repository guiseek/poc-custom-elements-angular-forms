import { Component, h } from '@stencil/core';

@Component({
  tag: 'nxc-menu-divider',
  styleUrl: 'nxc-menu-divider.scss',
  shadow: true,
})
export class NxcMenuDivider {
  render() {
    return <div part="base" class="menu-divider" role="separator" />;
  }
}
