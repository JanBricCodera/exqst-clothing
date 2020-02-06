import React from "react";
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const checkoutItem = ({
  cartItem,
  clearItem,
  increaseItemQuantity,
  decreaseItemQuantity
}) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  increaseItemQuantity: item => dispatch(addItem(item)),
  decreaseItemQuantity: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(checkoutItem);
