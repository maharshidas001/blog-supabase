import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { isLoaded, isSignedIn } = useUser();

  return !isSignedIn && isLoaded ? <Navigate to='/login' /> : <Outlet />;
}

export default Protected;