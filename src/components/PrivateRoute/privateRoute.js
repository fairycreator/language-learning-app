const { useSelector } = require("react-redux");
const { Navigate, Outlet } = require("react-router-dom");

const PrivateRoute = ({ element }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/teachers" />;
};

export default PrivateRoute;
