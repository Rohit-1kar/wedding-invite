import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([IndexRoute]);