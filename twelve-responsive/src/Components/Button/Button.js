import React from "react";
import "./Button.css";

//this practise is goofd/great
const SIZES = ["btn-medium", "btn-small", "btn-mobile","btn-wide","btn-large"];
const STYLES = ["btn--primary", "btn--outline"];
const COLORS = ["primary", "red", "green", "blue"];

const Button = ({
    children,
    onClick,
    buttonSize,
    buttonStyle,
    buttonColor
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`}>{children}</button>
  );
};

export default Button;
