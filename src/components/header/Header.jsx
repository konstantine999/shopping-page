import React from "react";
import ShopingCart from "../../images/ShoppingBox.png";
import "./header.css";

function Header(props) {
  return (
    <header>
      <h1>Shopping cart</h1>
      <div className="shopping-box-wrapper">
        <img className="shopping-box" src={ShopingCart} alt="Shopingbox" />
        <span className="count-number">{props.cartLength}</span>
      </div>
    </header>
  );
}

export default Header;
