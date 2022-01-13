import React from "react";
import { Button } from "@mui/material";
import { BsArrowRepeat } from "react-icons/bs";
import "../styles/components/_LoaderButton.scss";

const LoaderButton = ({ isLoading, className = "", disabled = false, ...props }) => {
    return (
        <Button
            disabled={disabled || isLoading}
            className={`LoaderButton ${className}`}
            {...props}
        >
            {isLoading && <BsArrowRepeat className="spinning" />}
            {props.children}
        </Button>
    );
}

export default LoaderButton;