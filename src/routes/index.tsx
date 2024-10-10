import {createFileRoute, redirect} from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: '/dashboard',
      });
    }
    else {
      throw redirect({
        to: '/login'
      });
    }
  },
});
