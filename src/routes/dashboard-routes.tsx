import { createRouter, createRoute } from '@tanstack/react-router';
import { Error404 } from '@components/pages';
import { DashboardPage, PostsPage } from '@pages/index';
import { dashboardRoot } from './root-routes';

const dashboardRoute = createRoute({
  getParentRoute: () => dashboardRoot,
  path: '/',
  component: () => <DashboardPage />,
});

const postsRoute = createRoute({
  getParentRoute: () => dashboardRoot,
  path: '/posts',
  component: () => <PostsPage />,
});

const notFoundRoute = createRoute({
  getParentRoute: () => dashboardRoot,
  path: '/*',
  component: () => <Error404 />,
});

const routeTree = dashboardRoot.addChildren([
  dashboardRoute,
  postsRoute,
  notFoundRoute,
]);

export const dashboardRouter = createRouter({ routeTree });
