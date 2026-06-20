import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const resetInput = () => {
    setInputValue("")
  }

  return { value: inputValue, onChange: handleChange, resetInput: resetInput }
}

export default useInput
