import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from 'src/components/route/PrivateRoute';
import PublicRoute from 'src/components/route/PublicRoute';
import { Loading } from 'src/components/ui';
import { publicRoutes, privateRoutes } from 'src/config/routes.config';
import appConfig from '../config/app.config';

const { authenticatedEntryPath, unAuthenticatedEntryPath } = appConfig;

const AllRoutes = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={authenticatedEntryPath} />}
        />
        {privateRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Public Routes */}
      <Route path="/" element={<PublicRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={unAuthenticatedEntryPath} />}
        />
        {publicRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Route>
    </Routes>
  );
};

const Views = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
