import Landing from '../Views/Landing';
import Admin from '../Views/Admin';

export const protectedRoutePrefix = '/portal';

export const publicRoutes = [
  {
    label: 'Landing',
    to: '/',
    component: Landing,
  },
];

export const protectedRoutes: {
  label: string;
  to: string;
  disabled?: boolean;
  tab?: boolean;
  component: any;
}[] = [
  {
    label: 'Admin',
    to: '/admin',
    component: Admin,
  },
];
