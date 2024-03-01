import { redirect } from '@tanstack/react-router';

export function redirectToLoginPage() {
  return redirect({
    to: '/auth/login',
  });
}
