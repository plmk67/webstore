import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import STRIPE_PUBLISHABLE from "../../constants/stripe";
//URL post
import PAYMENT_SERVER_URL from "../../constants/server";

const CURRENCY = "CAD";

const fromCADToCent = amount => amount * 100;

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment Error");
};

const onToken = (amount, description) => token =>
  axios
    .post(
      `https://us-central1-socialmonkey-bea78.cloudfunctions.net/api/stripe_payment`,
      {
        description: description,
        source: token.id,
        currency: CURRENCY,
        amount: fromCADToCent(amount)
      }
    )
    .then(successPayment)
    .catch(errorPayment);

const StripeCheckoutComponent = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromCADToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default StripeCheckoutComponent;
