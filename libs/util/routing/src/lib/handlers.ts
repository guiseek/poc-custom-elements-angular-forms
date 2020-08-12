import { RouteChangeData } from './interfaces';

// url == https://example.com/foo/bar
// Formatação consistente para href

export function scrollToTop(type) {
  if (['link', 'go'].includes(type)) {
    window.scrollTo({ top: 0 })
  }
}

export function fullURL(url?: string) {
    const href = new URL(url || window.location.href).href;
    return href.endsWith('/') ? href : `${href}/`;
  }
  
  // Altera o URL no histórico
export function addToPushState(url: string) {
    if (!window.history.state || window.history.state.url !== url) {
      window.history.pushState({ url }, 'internalLink', url);
    }
  }
  
  // Rolagem suave para ancorar o link
  export function scrollToAnchor(anchor) {
    document
      .querySelector(anchor)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Manipula o botão Voltar
  export function handlePopState(e: PopStateEvent): RouteChangeData {
    const next = fullURL();
    addToPushState(next);
    return { type: 'popstate', next };
  }
  
  // Os segmentos vinculam cliques em tipos
  export function handleLinkClick(e: MouseEvent): RouteChangeData {
    let anchor;
  
    const target = e.target || e.srcElement;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return { type: 'disqualified' };
    }
  
    // Procura elementos contendo href
    for (
      var n = e.target as HTMLElement;
      n.parentNode;
      n = n.parentNode as HTMLElement
    ) {
      if (n.nodeName === 'A') {
        anchor = n;
        break;
      }
    }
  
    // Links externos
    if (anchor && anchor.host !== location.host) {
      anchor.target = '_blank';
      return { type: 'external' };
    }
  
    // Link pronto para util-route
    if (anchor && anchor.hasAttribute('href')) {
      const ahref = anchor.getAttribute('href');
      const url = new URL(ahref, location.origin);
  
      // Carregamento rápido
      e.preventDefault();
  
      // Se ancorar, role,
      if (ahref && ahref.startsWith('#')) {
        scrollToAnchor(ahref);
        return { type: 'scrolled' };
      } else {
        const next = fullURL(url.href);
        const prev = fullURL();
  
        addToPushState(next);
        return { type: 'link', next, prev };
      }
    } else {
      return { type: 'noop' };
    }
  }