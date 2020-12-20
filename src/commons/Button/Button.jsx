import React from "react";
import "./Button.css";
export const Button = ({ toogleForm,className, onClick, text }) => {
  return (
    <div className="btn-container">
      <button className={`button ${className}`} onClick={toogleForm}>
        {text}
      </button>
    </div>
  );
};
