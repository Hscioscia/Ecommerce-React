import React, { useState } from "react";
import "../ItemCount/ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);
  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const counterDown = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="counterC">
      <p>Contador: {counter}</p>
        <button className="btn1" onClick={counterUp}>
          +
        </button>
        <button className="btn2" onClick={counterDown}>
          -
        </button>
    </div>
  )};

export default ItemCount;
