import { useCallback, useState } from "react";
import Button from "./Button";

function CallbackDemo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <Button increment={increment} />
      <hr />
    </>
  );
}
export default CallbackDemo;
