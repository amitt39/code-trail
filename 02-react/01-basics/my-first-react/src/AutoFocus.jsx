import { useEffect, useRef } from "react";

function AutoFocus() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        ref={inputRef}
        placeholder="Use Referecne Auto Foucs"
      />
    </>
  );
}
export default AutoFocus;
