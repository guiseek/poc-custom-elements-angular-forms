import { newSpecPage } from '@stencil/core/testing';
import { NxcRipple } from './nxc-ripple';

describe('nxc-ripple', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NxcRipple],
      html: '<nxc-ripple></nxc-ripple>'
    });
    expect(root).toEqualHtml(`
      <nxc-ripple>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nxc-ripple>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcRipple],
      html: `<nxc-ripple first="Stencil" last="'Don't call me a framework' JS"></nxc-ripple>`
    });
    expect(root).toEqualHtml(`
      <nxc-ripple first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nxc-ripple>
    `);
  });
});
