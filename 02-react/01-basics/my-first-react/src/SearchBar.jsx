import { useEffect, useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

// Create a new component called SearchBar.
// It has one input field. As the user types, log the current value to the console using useEffect.
// Rules:

// Use useState for the input value
// Use useEffect with the correct dependency
// No onChange logging — only useEffect should do the logging

export default SearchBar;
