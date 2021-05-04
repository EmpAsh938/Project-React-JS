import React from "react";

const Button = ({ handleClick }) => {
  return (
    <div className="btn-wrapper">
      <button onClick={() => handleClick("prev")}>Prev</button>
      <button onClick={() => handleClick("next")}>Next</button>
    </div>
  );
};

export default Button;
