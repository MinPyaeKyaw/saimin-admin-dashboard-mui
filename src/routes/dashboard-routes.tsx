import { createRouter, createRoute } from '@tanstack/react-router';
import { Error404 } from '@components/pages';
import { DashboardPage, PostsPage, ProductCreate } from '@pages/index';
import { dashboardRoot } from './root-routes';

/**
 * * Dashboard Routes
 */
const dashboardRoute = createRoute({
  getParentRoute: () => dashboardRoot,
  path: '/',
  component: () => <DashboardPage />,
});

/**
 * * Product Routes
 */
const postsRoute = createRoute({
  getParentRoute: () => dashboardRoot,
  path: '/products',
  component: () => <PostsPage />,
});

const createPostRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '/create',
  component: () => <ProductCreate />,
});

/**
 * * Error Routes
 */
const notFoundRoute = createRoute({
  getParentRoute: () => dashboardRoot,
  path: '/*',
  component: () => <Error404 />,
});

const routeTree = dashboardRoot.addChildren([
  dashboardRoute,
  postsRoute.addChildren([createPostRoute]),
  notFoundRoute,
]);

export const dashboardRouter = createRouter({ routeTree });
