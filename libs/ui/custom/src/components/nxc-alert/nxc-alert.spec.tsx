import { newSpecPage } from '@stencil/core/testing';
import { NxcAlert } from './nxc-alert';

describe('nxc-alert', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NxcAlert],
      html: '<nxc-alert></nxc-alert>',
    });
    expect(root).toEqualHtml(`
      <nxc-alert>
        <mock:shadow-root>
          <div aria-hidden="" class="alert alert--primary" part="base" role="alert">
            <span class="alert__icon" part="icon">
               <slot name="icon"></slot>
             </span>
             <span class="alert__message" part="message">
               <slot></slot>
            </span>
          </div>
        </mock:shadow-root>
      </nxc-alert>
    `);
  });

});
