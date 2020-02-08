import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripeButton.styles.scss";

const onToken = token => {
  console.log(token);
  alert("Payment succesful");
};

const stripeButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = "pk_test_0i7bLf4gVp9xqqCaqronIgLF00f0cK5WIY";

  return (
    <StripeCheckout
      label="Pay now"
      name="EXQST clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeButton;
