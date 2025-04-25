
import React from "react";
import clsx from "clsx";
import { SelectProps } from "../types";
import "../styles/components/Select.css";

const base = "select-base";

const variants = {
    primary: "select-primary",
    secondary: "select-secondary"
};

const Select: React.FC<SelectProps> = ({ variant = "primary", items, children, className, ...props }) => {
    return (
        <select
            {...props}
            className={clsx(base, variants[variant], className)}
        >
            {items.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
