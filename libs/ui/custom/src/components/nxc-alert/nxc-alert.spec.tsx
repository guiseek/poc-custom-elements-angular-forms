import { newSpecPage } from '@stencil/core/testing';
import { NxcAlert } from './nxc-alert';

describe('nxc-alert', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NxcAlert],
      html: '<nxc-alert></nxc-alert>'
    });
    expect(root).toEqualHtml(`
      <nxc-alert>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nxc-alert>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcAlert],
      html: `<nxc-alert first="Stencil" last="'Don't call me a framework' JS"></nxc-alert>`
    });
    expect(root).toEqualHtml(`
      <nxc-alert first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nxc-alert>
    `);
  });
});
