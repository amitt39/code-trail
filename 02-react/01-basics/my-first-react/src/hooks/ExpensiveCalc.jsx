import { useMemo, useState } from "react";

function ExpensiveCalc() {
  const [inputValue, setInputValue] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [color, setColor] = useState("rgba(252, 252, 252, 0.3)");
  const [showingResult, setShowingResult] = useState(false);
  const [count, setCount] = useState(0);

  const setNumber = (e) => {
    setInputValue(e.target.value === "" ? 1 : Number(e.target.value));
  };

  const changeColor = (e) => {
    setColor(e.target.value !== "" ? "#ffffff" : "rgba(252, 252, 252, 0.3)");
  };

  const calc = (value) => {
    return 123456789 * value;
  };

  const result = useMemo(() => {
    console.log("Calculating...");

    return calc(multiplier);
  }, [multiplier]);

  // const result = () => {
  //   console.log("Calculating...");
  //   return calc(multiplier);
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!showingResult ? (
          <h1>
            123456779 x <span style={{ color: color }}>{inputValue}</span>
          </h1>
        ) : (
          <h1>{result}</h1>
          // <h1>{result()}</h1> || if runnig without useMemo use this.
        )}
        <div
          style={{ height: "100%", backgroundColor: "#2f2f2f", width: "1px" }}
        ></div>
        <h1>{count}</h1>
      </div>
      <input
        type="number"
        name=""
        id=""
        placeholder="Enter  Number"
        onChange={(e) => {
          setShowingResult(false);
          setNumber(e);
          changeColor(e);
        }}
      />
      <button
        onClick={() => {
          setShowingResult(true);
          setMultiplier(inputValue);
        }}
      >
        Calculate
      </button>
      <button
        onClick={() => {
          console.log("Count++");

          setCount((prev) => prev + 1);
        }}
      >
        Re-render
      </button>
      <hr />
    </>
  );
}
export default ExpensiveCalc;
