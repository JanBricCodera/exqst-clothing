import React from "react";
import "./cartWindowMini.styles.scss";
import CustomButton from "../customButton/customButton.component";
import ItemsInCart from "../itemsInCart/itemsInCart";
import { connect } from "react-redux";

const cartWindowMini = props =>
  props.show ? (
    <div className="cart-window-mini">
      <div className="cart-items">
        {props.cartItems.map(cartItem => (
          <ItemsInCart key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  ) : null;

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(cartWindowMini);
