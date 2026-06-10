import React from "react";
const Button = ({ increment }) => {
  console.log("Button rendered");
  return (
    <>
      <button
        onClick={() => {
          increment();
        }}
      >
        Re-render
      </button>
    </>
  );
};

export default React.memo(Button);
