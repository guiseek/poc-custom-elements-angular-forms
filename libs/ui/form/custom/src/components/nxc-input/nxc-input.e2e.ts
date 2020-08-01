import { newE2EPage } from '@stencil/core/testing';

describe('nxc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<nxc-input></nxc-input>');
    const element = await page.find('nxc-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<nxc-input></nxc-input>');
    const component = await page.find('nxc-input');
    const element = await page.find('nxc-input >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
