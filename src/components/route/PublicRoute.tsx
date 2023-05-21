import { Navigate, Outlet } from "react-router-dom";
import appConfig from "src/config/app.config";
import Auth from "src/modules/auth/model";

const PublicRoute = () => {
  return Auth.authenticated ? (
    <Navigate to={appConfig.authenticatedEntryPath} />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
