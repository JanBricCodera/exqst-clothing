import React from "react";
import "./cartWindowMini.styles.scss";
import CustomButton from "../customButton/customButton.component";

const cartWindowMini = () => (
  <div className="cart-window-mini">
    <div className="cart-items"></div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default cartWindowMini;
