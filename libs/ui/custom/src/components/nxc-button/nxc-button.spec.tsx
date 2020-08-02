import { newSpecPage } from '@stencil/core/testing';
import { NxcButton } from './nxc-button';

describe('nxc-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NxcButton],
      html: '<nxc-button></nxc-button>'
    });
    expect(root).toEqualHtml(`
      <nxc-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nxc-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcButton],
      html: `<nxc-button first="Stencil" last="'Don't call me a framework' JS"></nxc-button>`
    });
    expect(root).toEqualHtml(`
      <nxc-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nxc-button>
    `);
  });
});
