import React from "react";
import "./Button.scss";

export interface ButtonProps {
  type: "submit" | "button";
  label: string;
}

const Button: React.FC<ButtonProps> = ({ type, label }) => {
  return (
    <button className="Button" type={type}>
      {label}
    </button>
  );
};

export default Button;
