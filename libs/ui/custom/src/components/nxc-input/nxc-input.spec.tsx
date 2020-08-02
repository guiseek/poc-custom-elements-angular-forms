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
          <div class="form-control" part="form-control">
            <label class="label label--medium" htmlfor="input-1" part="label"></label>
            <div class="input input--empty input--medium" part="base">
              <span class="input__prefix" part="prefix">
                <slot name="prefix"></slot>
              </span>
              <input aria-describedby="input-help-text-1" aria-labelledby="input-label-1" class="input__control" id="input-1" part="input" type="text" value="">
              <span class="input__suffix" part="suffix">
                <slot name="suffix"></slot>
              </span>
            </div>
            <div class="help-text help-text--medium" id="input-help-text-1" part="help-text">
              <slot name="help-text"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </nxc-input>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NxcInput],
      html: `<nxc-input name="email" label="Email"></nxc-input>`
    });
    expect(root).toEqualHtml(`
      <nxc-input name="email" label="Email">
        <mock:shadow-root>
          <div class="form-control form-control--has-label" part="form-control">
            <label class="label label--medium" htmlfor="input-2" part="label">
              Email
            </label>
            <div class="input input--empty input--medium" part="base">
              <span class="input__prefix" part="prefix">
                <slot name="prefix"></slot>
              </span>
              <input aria-describedby="input-help-text-2" aria-labelledby="input-label-2" class="input__control" id="input-2" name="email" part="input" type="text" value="">
              <span class="input__suffix" part="suffix">
                <slot name="suffix"></slot>
              </span>
            </div>
            <div class="help-text help-text--medium" id="input-help-text-2" part="help-text">
              <slot name="help-text"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </nxc-input>
    `);
  });
});
