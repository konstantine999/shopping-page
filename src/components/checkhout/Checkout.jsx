import React from "react";
import "./checkout.css";

function Checkout(props) {
  return (
    <div className="checkout-wrapper">
      <div className="total-wrapper">
        <h4>Total</h4>
        <span>${props.sum()}</span>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default Checkout;
