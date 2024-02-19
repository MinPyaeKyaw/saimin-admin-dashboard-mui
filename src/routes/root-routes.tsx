import { createRootRoute } from '@tanstack/react-router';
import { AuthLayout, DashboardLayout } from '@layouts/index';

export const dashboardRoot = createRootRoute({
  component: () => <DashboardLayout />,
});

export const authRoot = createRootRoute({
  component: () => <AuthLayout />,
});
