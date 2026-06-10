import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useAuthStore";

function Login() {
  const { login } = useStore();
  const navigate = useNavigate();

  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          {/* <input type="text" name="username" id="" />
          <input type="password" name="password" id="" /> */}
          <button
            ref={buttonRef}
            onClick={() => {
              (login(), navigate("/dashboard"));
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
