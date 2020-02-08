import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkoutItem/checkoutItem.component";
import StripeButton from "../../components/stripeButton/stripeButton.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const checkout = ({ cartItems, totalCartPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${totalCartPrice}</span>
    </div>
    <div className="test-warning">
      *Please use the following dummy credit card number for payment*
      <br />
      4242 4242 4242 4242 - Exp:01/20 -CVV:123
    </div>
    <StripeButton price={totalCartPrice} />
  </div>
);

// const mapStateToProps = state => ({});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCartPrice: selectCartTotal
});

export default connect(mapStateToProps)(checkout);
