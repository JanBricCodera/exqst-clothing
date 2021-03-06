import React from "react";
import "./cartWindowMini.styles.scss";
import CustomButton from "../customButton/customButton.component";
import ItemsInCart from "../itemsInCart/itemsInCart";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

const cartWindowMini = props =>
  props.show ? (
    <div className="cart-window-mini">
      <div className="cart-items">
        {props.cartItems.length ? (
          props.cartItems.map(cartItem => (
            <ItemsInCart key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-cart">Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => props.history.push("/checkout")}>
        Go to checkout
      </CustomButton>
    </div>
  ) : null;

const mapStateToProps = state => ({
  cartItems: selectCartItems(state) //previously raw state.cart.cartItems
});

export default withRouter(connect(mapStateToProps)(cartWindowMini));
