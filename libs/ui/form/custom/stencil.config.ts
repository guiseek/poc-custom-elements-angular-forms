import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'nxc-form-custom',
  buildEs5: false,
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../../dist/libs/ui/form/custom/dist',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
      dir: '../../../../dist/libs/ui/form/custom/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
