import { Navigate } from "react-router-dom";
import useStore from "./store/useAuthStore";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useStore();
  return <>{!isLoggedIn ? <Navigate to={"/login"} /> : children}</>;
}

export default ProtectedRoute;
