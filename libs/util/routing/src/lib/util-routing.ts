import { Router } from './router';
import { UtilRouteOptions } from './interfaces';

export const utilRouting = (opts?: UtilRouteOptions) => {
  const router = new Router(opts);
  console.log('⚡ Blue 42 Util Route ⚡');
  return router;
};
