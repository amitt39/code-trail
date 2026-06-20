// Build a Stopwatch component.
// It should have —

// A number on screen showing seconds (starts at 0)
// A Start button
// A Stop button

// When Start is clicked → seconds start counting up every 1 second
// When Stop is clicked → counting stops
// Rules:

// useState for the seconds displayed on screen
// useRef to store the interval ID
// useEffect not needed for this one — handle everything in the button click handlers

import { useRef, useState } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          const interval = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
          intervalRef.current = interval;
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop
      </button>
    </>
  );
}
export default StopWatch;
