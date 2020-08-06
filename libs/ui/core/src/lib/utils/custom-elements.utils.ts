import { JSX } from '@nxc/ui/custom';

export const query = async (selector: string) => {
  return customElements.whenDefined(selector);
};
export const customSelector = async (selector: keyof JSX.IntrinsicElements) => {
  return await query(selector).then(() => document.querySelector(selector));
};
export const customSelectorAll = async (selector: keyof JSX.IntrinsicElements) => {
  return await query(selector).then(() =>
    document.querySelectorAll(selector)
  );
};
