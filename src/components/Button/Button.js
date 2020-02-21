import React from "react";
import "./Button.css";

const Button = props => (
  <button className={`button-${props.type}`}>
    {props.label}
    {/* <image src="" /> */}
  </button>
);
export default Button;
