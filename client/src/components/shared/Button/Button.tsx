import React from "react";
import "./Button.scss";

export interface ButtonProps {
  type: "submit" | "button";
  label: string;
  size?: "small" | "large";
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ type, variant, label, size }) => {
  return (
    <button
      className={`Button ${variant === "primary" ? "Button--primary" : "Button--secondary"}`}
      type={type}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
