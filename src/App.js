import { useState } from "react";
import "./App.css";
import Checkout from "./components/checkhout/Checkout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [cart, setCart] = useState([]);
  function sum() {
    let sum = 0;
    {
      cart.map((item) => {
        sum += item.price;
      });
    }
    return sum;
  }
  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }
  let cartLength = cart.length;
  return (
    <div className="App">
      <Header cartLength={cartLength} />
      <Main addToCart={addToCart} />
      <Checkout sum={sum} />
    </div>
  );
}

export default App;
