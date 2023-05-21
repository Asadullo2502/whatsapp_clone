import { Navigate, Outlet } from 'react-router-dom';
import appConfig from 'src/config/app.config';
import Auth from 'src/modules/auth/model';

const PrivateRoute = () => {
  if (!Auth.authenticated) {
    return (
      <Navigate
        to={`${appConfig.unAuthenticatedEntryPath}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
