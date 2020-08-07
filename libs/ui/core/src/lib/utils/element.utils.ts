/**
 * Cria um elemento
 *
 * @export
 * @template K
 * @param {K} tag
 * @param {ElementCreationOptions} [opts]
 * @returns {HTMLElementTagNameMap[K]}
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  opts?: ElementCreationOptions
): HTMLElementTagNameMap[K] {
  return document.createElement(tag, opts);
}

/**
 * Adiciona atributos em um elemento
 * a patir de um objeto chave: valor
 *
 * @export
 * @template E
 * @param {E} element
 * @param {E} attrs
 * @returns {E}
 */
export function setAttrs<E>(attrs: E, element: HTMLElement): HTMLElement {
  Object.entries(attrs).map(([key, val]) => element.setAttribute(key, val));
  return element;
}
