import React from "react";
import "./cartWindowMini.styles.scss";
import CustomButton from "../customButton/customButton.component";

const cartWindowMini = props =>
  props.show ? (
    <div className="cart-window-mini">
      <div className="cart-items"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  ) : null;

export default cartWindowMini;

// props.show ? (
//     <div className={classes.Backdrop} onClick={props.clicked}></div>
//   ) : null;
