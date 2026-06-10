import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  return <>{!isLoggedIn ? <Navigate to="/login" /> : children}</>;
}

export default ProtectedRoute;
