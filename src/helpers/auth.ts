import { redirect } from '@tanstack/react-router';
import useUserStore from '@stores/userStore';

export function redirectToLoginPage() {
  const user = useUserStore.getState();

  if (!user.info.token) {
    return redirect({
      to: '/auth/login',
    });
  }

  return undefined;
}

export function redirectToDashboardPage() {
  const user = useUserStore.getState();

  if (user.info.token) {
    return redirect({
      to: '/',
    });
  }

  return undefined;
}
