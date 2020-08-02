import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'nxc-custom',
  buildEs5: false,
  taskQueue: 'async',
  globalStyle: './../styles/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../dist/libs/ui/custom/dist',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
      dir: '../../../dist/libs/ui/custom/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
