import { newSpecPage } from '@stencil/core/testing';
import { NxcColorPicker } from './nxc-color-picker';

describe('nxc-color-picker', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NxcColorPicker],
      html: '<nxc-color-picker></nxc-color-picker>'
    });
    expect(root).toEqualHtml(`
      <nxc-color-picker>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nxc-color-picker>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcColorPicker],
      html: `<nxc-color-picker first="Stencil" last="'Don't call me a framework' JS"></nxc-color-picker>`
    });
    expect(root).toEqualHtml(`
      <nxc-color-picker first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nxc-color-picker>
    `);
  });
});
