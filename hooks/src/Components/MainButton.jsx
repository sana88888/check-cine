import React from "react";
import "./style.css";

function MainButton({ text, type, inputRef }) {
  const handleClick = () => {};
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      type="button"
      id="main-btn"
    >
      {text}
    </button>
  );
}

export default MainButton;
