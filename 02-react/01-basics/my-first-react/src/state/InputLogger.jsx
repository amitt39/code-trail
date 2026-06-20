import { useRef } from "react";

function InputLogger() {
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} type="text" name="" id="" />
      <button onClick={() => console.log(inputRef.current.value)}>
        Log Value
      </button>
    </>
  );
}
export default InputLogger;
