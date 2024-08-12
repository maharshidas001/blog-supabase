import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = () => {

  const { isSignedIn } = useSelector(state => state.auth);

  return !isSignedIn ? <Navigate to='/login' /> : <Outlet />;
}

export default Protected;