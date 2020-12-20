import React from "react";
import { Label } from "../Label/Label";
import "./Title.css"

export const Title = ({ text }) => {
  return (
    <div className="title-container">
      <label className="title-label">{text}</label>
    </div>
  );
};
    