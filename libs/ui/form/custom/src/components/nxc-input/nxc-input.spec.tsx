import { newSpecPage } from '@stencil/core/testing';
import { NxcInput } from './nxc-input';

describe('nxc-input', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NxcInput],
      html: '<nxc-input></nxc-input>'
    });
    expect(root).toEqualHtml(`
      <nxc-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nxc-input>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcInput],
      html: `<nxc-input first="Stencil" last="'Don't call me a framework' JS"></nxc-input>`
    });
    expect(root).toEqualHtml(`
      <nxc-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nxc-input>
    `);
  });
});
