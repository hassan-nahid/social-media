import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import auth from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!loading && (!user || !token)) {
      navigate("/login");
    }
  }, [loading, user, token, navigate]);

  if (loading) {
    // Only show loading while Firebase is checking auth
    return <Loading />;
  }

  // If user or token missing, we already navigated, so render nothing
  if (!user || !token) {
    return null;
  }

  // Authenticated, render the protected children
  return children;
};

export default PrivateRoute;
