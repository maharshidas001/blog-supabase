import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const Protected = () => {

  const { isSignedIn, isLoaded, actor, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded, !isSignedIn) {
      navigate('/login');
    }
  }, [isLoaded]);

  if (!isLoaded) return <p>Loading...</p>;

  return <Outlet />;
}

export default Protected;