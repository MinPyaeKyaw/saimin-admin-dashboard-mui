import { createRouter, createRoute } from '@tanstack/react-router';
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

const routeTree = dashboardRoot.addChildren([dashboardRoute, postsRoute]);

export const dashboardRouter = createRouter({ routeTree });
