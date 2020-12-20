import React from "react";
import "./Input.css";

export const Input = ({attribute,handleChange, param }) => {
  //  placeholder, id, name, type, event, className;

  return (
    <div className="input-container">
      <input
        id={attribute.id}
        name={attribute.name}
        type={attribute.type}
        placeholder={attribute.placeholder}
        // onChange={(e) => handleChange(e.target.name, e.target.value)}
        className="regular-style"
      />
    </div>
  );
};
