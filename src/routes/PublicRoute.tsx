import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_PATH } from '@app/config';

const PublicRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.currentUser);
  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? <Navigate to={`${BASE_PATH}/`} /> : <Outlet />;
};

export default PublicRoute;
