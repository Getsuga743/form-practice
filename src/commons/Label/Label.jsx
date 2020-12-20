import React from "react";
import "./Label.css";
export const Label = ({ text }) => {
  return (
    <div className="label-container">
      <label>{text}</label>
    </div>
  );
};
