import React from 'react';
import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { Error404 } from '@components/pages';
import { redirectToLoginPage } from '@helpers/auth';
import { AuthLayout, DashboardLayout } from '@layouts/index';
import {
  DashboardPage,
  ForgetPasswordPage,
  LoginPage,
  OTPPage,
  PostsPage,
  ProductCreate,
} from '@pages/index';

/**
 * * Root Route
 */
export const appRoot = createRootRoute();

/**
 * * Parent Routes
 */
const authParentRoute = createRoute({
  getParentRoute: () => appRoot,
  path: '/auth',
  component: () => <AuthLayout />,
});
const dashboardParentRoute = createRoute({
  getParentRoute: () => appRoot,
  // path: '/',
  id: 'dashboard-parent',
  component: () => <DashboardLayout />,
});

/**
 * * Authentication Routes
 */
const loginRoute = createRoute({
  getParentRoute: () => authParentRoute,
  path: '/login',
  component: () => <LoginPage />,
});

const forgetPasswordRoute = createRoute({
  getParentRoute: () => authParentRoute,
  path: '/forgot-password',
  component: () => <ForgetPasswordPage />,
});

const otpRoute = createRoute({
  getParentRoute: () => authParentRoute,
  path: '/otp',
  component: () => <OTPPage />,
});

/**
 * * Dashboard Routes
 */
const dashboardRoute = createRoute({
  getParentRoute: () => dashboardParentRoute,
  path: '/',
  component: () => <DashboardPage />,
  beforeLoad: redirectToLoginPage,
});

/**
 * * Product Routes
 */
const productRoute = createRoute({
  getParentRoute: () => dashboardParentRoute,
  path: '/products',
  component: () => <PostsPage />,
  beforeLoad: redirectToLoginPage,
});

const createPorductRoute = createRoute({
  getParentRoute: () => productRoute,
  path: '/create',
  component: () => <ProductCreate />,
  beforeLoad: redirectToLoginPage,
});

/**
 * * Error Routes
 */
const dashboardNotFoundRoute = createRoute({
  getParentRoute: () => dashboardParentRoute,
  path: '/*',
  component: () => <Error404 />,
});

const authNotFoundRoute = createRoute({
  getParentRoute: () => authParentRoute,
  path: '/*',
  component: () => <Error404 />,
});

/**
 * * Route Tree
 */
const routeTree = appRoot.addChildren([
  dashboardParentRoute.addChildren([
    productRoute.addChildren([createPorductRoute]),
    dashboardRoute,
    dashboardNotFoundRoute,
  ]),
  authParentRoute.addChildren([
    loginRoute,
    forgetPasswordRoute,
    otpRoute,
    authNotFoundRoute,
  ]),
]);

export const appRouter = createRouter({
  routeTree,
});
