import { memo, useMemo, lazy, Suspense } from 'react';
import Auth from 'src/modules/auth/model';
import useAuthStore from 'src/modules/auth/store';
import { Loading } from '../ui';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const AuthLayout = lazy(() => import('./AuthLayout/AuthLayout'));

const Layout = () => {
  useAuthStore();

  const AppLayout = useMemo(
    () => (Auth.authenticated ? Dashboard : AuthLayout),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Auth.authenticated]
  );

  return (
    <Suspense fallback={<Loading />}>
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
