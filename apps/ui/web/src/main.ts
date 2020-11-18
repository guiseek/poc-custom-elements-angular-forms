import { defineCustomElements } from '@nxc/ui/custom/loader';
import {
  NxcRouterElement,
  NxcTabsElement,
} from '@nxc/ui/common';
// import './app/pages/index';
import { styles, template } from './app/tabs/nxc-tabs.element';
import AboutUs from './app/pages/user';


NxcTabsElement.styles = styles;
NxcTabsElement.template = template;

defineCustomElements();
customElements.define(
  'nxc-tabs',
  NxcTabsElement
);
customElements.define(
  'nxc-router',
  NxcRouterElement
);

// customElements.define('about-page', AboutUs);


(async (define) => {
  console.log(define);
  // customElements.define('nxc-router', NxcRouter);
  customElements.whenDefined('nxc-router').then(() => {
    console.log('router');
  });

  define(window, {
    rel: (el, evt, listen, opts) => {
      console.log(el, evt, listen, opts);
    },
    resourcesUrl: 'resource',
  }).then(() => {
    console.log('defined');
  });
})(defineCustomElements);

// export declare type Window<T = any> = {
//   [P in keyof T]?: T[P];
// } & {
//   web: {
//     production: boolean;
//     version: number;
//     getProp: (from: Object, prop: keyof Object) => any;
//   };
// };

// (window as any).web = {
//   production: environment.production,
//   version: 0.1,
//   getProp: function (from: Object, prop: keyof Object) {
//     return from && from[prop];
//   },
// };
