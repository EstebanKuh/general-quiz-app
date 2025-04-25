import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../types";

const base = "px-4 py-2 rounded font-medium transition";

const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
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
