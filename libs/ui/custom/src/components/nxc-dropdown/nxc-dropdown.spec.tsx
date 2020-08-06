import { newSpecPage } from '@stencil/core/testing';
import { NxcDropdown } from './nxc-dropdown';

describe('nxc-dropdown', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NxcDropdown],
      html: '<nxc-dropdown></nxc-dropdown>'
    });
    expect(root).toEqualHtml(`
      <nxc-dropdown>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nxc-dropdown>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcDropdown],
      html: `<nxc-dropdown first="Stencil" last="'Don't call me a framework' JS"></nxc-dropdown>`
    });
    expect(root).toEqualHtml(`
      <nxc-dropdown first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nxc-dropdown>
    `);
  });
});
