import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const cartIcon = props => {
  return (
    <div className="cart-icon" onClick={props.clicked}>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps)(cartIcon);
