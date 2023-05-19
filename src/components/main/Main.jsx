import { useState } from "react";
import React from "react";
import "./main.css";
import Card from "./Card";
import Sneaker from "../../images/Sneakers.png";
import gucci from "../../images/gucci.png";
import tshirt from "../../images/tshirt.png";

function Main(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: Sneaker,
      price: 239.55,
      brand: "Nike",
      type: "Superstar",
      size: 8.5,
    },
    {
      id: 2,
      image: tshirt,
      price: 14.99,
      brand: "H&M",
      type: "T-Shirt",
      size: "S",
    },
    {
      id: 3,
      image: gucci,
      price: 1850.0,
      brand: "Gucci",
      type: "CG Marmont",
      size: null,
    },
  ]);

  return (
    <>
      <div className="main-wrapper">
        <div className="item-line">{products.length} Items</div>
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              price={item.price}
              item={item}
              image={item.image}
              brand={item.brand}
              type={item.type}
              size={item.size}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
