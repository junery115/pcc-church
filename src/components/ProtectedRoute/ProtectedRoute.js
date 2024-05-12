import { Navigate,Outlet } from "react-router-dom";
//import { useSelector } from "react-redux";
 const ProtectedRoute = ({
  redirectPath = '/',
}) => {
  const { user } = "Admin";
  //const { displayName } = user || {};
  if (!user) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
export default ProtectedRoute;