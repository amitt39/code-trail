// You've now covered useState, useEffect, and useRef.
// Before moving to the next hook — it's time for a small project using only what you've learned so far.
// Build a Countdown Timer —

// User enters a number in an input
// Clicks Start → counts down every second to 0
// When it hits 0 → show "Time's Up!" on screen
// A Reset button → clears everything back to start

// Use useState, useEffect, and useRef. No new concepts
import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";
function CountdownTimer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const inputRef = useRef();

  const validateInput = () => {
    if (inputRef.current.value === "") {
      inputRef.current.placeholder = "Please Enter Seconds";
      return true;
    }
  };

  const setCountdown = () => {
    setCount(Number(inputRef.current.value));
  };

  const startCountdown = () => {
    if (isRunning === false) {
      setIsRunning(true);
      setHasStarted(true);
    }
  };
  const resetCountdown = () => {
    setIsRunning(false);
    setHasStarted(false);
    setCount(0);
  };

  useEffect(() => {
    if (isRunning === false) {
      return;
    }
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      {hasStarted && count === 0 ? <h1>Time's Up!</h1> : <h1>{count}</h1>}
      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        placeholder="Enter Seconds"
      />
      <button
        onClick={() => {
          setCountdown();
        }}
      >
        Set Seconds
      </button>
      <div>
        <button
          onClick={() => {
            if (validateInput()) {
              return;
            }
            startCountdown();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            resetCountdown();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default CountdownTimer;
