import useInput from "../hooks/UseInput";

function LoginForm() {
  const email = useInput("");
  const password = useInput("");

  return (
    <>
      <input
        value={email.value}
        onChange={email.onChange}
        type="email"
        name=""
        id=""
      />
      <input
        value={password.value}
        onChange={password.onChange}
        type="password"
        name=""
        id=""
      />
      <button
        onClick={() => {
          console.log(email.value);
          console.log(password.value);
        }}
      >
        Submit
      </button>
      <button
        onClick={() => {
          email.resetInput();
          password.resetInput();
        }}
      >
        Clear
      </button>
    </>
  );
}

export default LoginForm;
