import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact Page</h1>
      <input type="text" name="" id="" />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default Contact;
