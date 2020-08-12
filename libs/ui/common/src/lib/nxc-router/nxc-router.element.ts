import { match } from '../util/index';
import { utilRouting } from '@nxc/util/routing';

export class NxcRouterElement extends HTMLElement {
  /**
   * Router looks for a nxc-outlet tag for updating the views on history updates.
   * Example:
   *
   * <nxc-router>
   *  <nxc-outlet>
   *    <!-- All DOM update will be happening here on route change -->
   *  </nxc-outlet>
   * </nxc-router>
   */
  get outlet() {
    return this.querySelector('nxc-outlet');
  }

  get root() {
    return window.location.pathname;
  }

  activeRoute;

  /**
   * Get all routes from the direct nxc-route child element.
   * The document title can be updated by providing an
   * title attribute to the nxc-route tag
   */
  get routes() {
    return Array.from(this.querySelectorAll('nxc-route'))
      .filter((node) => node.parentNode === this)
      .map((r) => ({
        path: r.getAttribute('path'),
        // Optional: document title
        title: r.getAttribute('title'),
        // name of the web component the should be displayed
        component: r.getAttribute('component'),
        // Bundle path if lazy loading the component
        resourceUrl: r.getAttribute('resourceUrl'),
      }));
  }

  connectedCallback() {
    this.createLinks();
    utilRouting({
      log: true,
      prefetch: false
    });
    // this.updateLinks();
    // this.navigate(window.location.pathname);

    // console.log('this.routes: ', this.routes);

    // window.addEventListener('popstate', this._handlePopstate);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this._handlePopstate);
  }

  _handlePopstate = () => {
    this.navigate(window.location.pathname);
  };
  createLinks() {
    this.querySelectorAll('a[route]').forEach((link) => {
      const target = link.getAttribute('route');
      link.setAttribute('href', target);
      
    });
  }
  updateLinks() {
    /**
     * Find all child link elements with route attribute to update the
     * href with route attribute value.
     *
     * Add custom click event handler to prevent the default
     * behaviour and navigate to the registered route onclick.
     */
    this.querySelectorAll('a[route]').forEach((link) => {
      const target = link.getAttribute('route');
      // link.removeEventListener('click')
      const listener = (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        this.navigate(target);
      };
      link.removeEventListener('click', listener.bind(this));
      link.setAttribute('href', target);
      link.addEventListener('click', listener.bind(this));
    });
  }

  navigate(url) {
    const matchedRoute = match(this.routes, url);
    if (matchedRoute !== null) {
      this.activeRoute = matchedRoute;
      window.history.pushState(null, null, url);
      this.update();
    }
  }

  /**
   * Update the DOM under outlet based on the active
   * selected route.
   */
  update() {
    const {
      component,
      title,
      params = {},
      resourceUrl = null,
    } = this.activeRoute;

    if (this.outlet && component) {
      // Remove all child nodes under outlet element
      while (this.outlet && this.outlet.firstChild) {
        this.outlet.removeChild(this.outlet.firstChild);
      }

      const updateView = () => {
        const view = document.createElement(component);
        document.title = title || document.title;
        for (let key in params) {
          /**
           * all dynamic param value will be passed
           * as the attribute to the newly created element
           * except * value.
           */
          if (key !== '*') view.setAttribute(key, params[key]);
        }

        this.outlet.appendChild(view);
        // Update the route links once the DOM is updated
        this.updateLinks();
      };

      console.log('resourceUrl: ', resourceUrl, resourceUrl !== null);
      if (resourceUrl !== null) {
        // this.getResource(resourceUrl, updateView);
      } else {
        updateView();
      }
    }
  }

  async getResource(resourceUrl: string, updateView: () => void) {
    console.log(resourceUrl);
    
    try {
      // return await import(resourceUrl).then(updateView);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  go(url) {
    this.navigate(url);
  }

  back() {
    window.history.go(-1);
  }
}
