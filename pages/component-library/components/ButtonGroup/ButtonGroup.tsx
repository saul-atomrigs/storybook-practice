/**
 * React ButtonGroup component:
 */
import React from "react";

const ButtonGroup = ({ buttons, onClick }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <button key={index} onClick={() => onClick(button)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
