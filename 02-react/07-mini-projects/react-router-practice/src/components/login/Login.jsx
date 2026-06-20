import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? "logout" : "login"}
      </button>
    </div>
  );
}

export default Login;
