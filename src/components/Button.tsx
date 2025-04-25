// src/components/Button.tsx
import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../types";
import "../styles/components/Button.css";

const base = "button-base";

const variants = {
  primary: "button-primary",
  secondary: "button-secondary"
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
