import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_PATH } from '@app/config';

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.currentUser);
  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={`${BASE_PATH}/login`} />;
};

export default PrivateRoute;
