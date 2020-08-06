import { newE2EPage } from '@stencil/core/testing';

describe('nxc-color-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<nxc-color-picker></nxc-color-picker>');
    const element = await page.find('nxc-color-picker');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<nxc-color-picker></nxc-color-picker>');
    const component = await page.find('nxc-color-picker');
    const element = await page.find('nxc-color-picker >>> div');
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
