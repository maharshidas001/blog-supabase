import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Protected = () => {

  const { isSignedIn } = useUser();

  return !isSignedIn ? <Navigate to='/login' /> : <Outlet />;
}

export default Protected;