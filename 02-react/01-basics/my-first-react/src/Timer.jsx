import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Mounted");
    const interval = setInterval(() => {
      setCount((prev) => prev + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1>{count}</h1>;
}

export default Timer;
