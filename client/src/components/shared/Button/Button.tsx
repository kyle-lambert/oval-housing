import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps & React.HtmlHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      className={`Button ${props.variant === "primary" ? "Button--primary" : "Button--secondary"}`}
      {...props}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
