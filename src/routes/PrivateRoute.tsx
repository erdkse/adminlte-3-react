import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.currentUser);
  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;
