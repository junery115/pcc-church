import { Navigate,Outlet } from "react-router-dom";

 const ProtectedRoute = ({
  redirectPath = '/',
}) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  if (!displayName) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
export default ProtectedRoute;