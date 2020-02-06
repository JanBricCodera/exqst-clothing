import React from "react";
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const checkoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(checkoutItem);
