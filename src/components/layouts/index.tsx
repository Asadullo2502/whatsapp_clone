import { memo, useMemo, lazy, Suspense } from 'react';
import Auth from 'src/modules/auth/model';
import useAuthStore from 'src/modules/auth/store';

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
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">...loading...</div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
