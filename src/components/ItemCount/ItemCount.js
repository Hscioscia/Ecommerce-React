/*import React, { useState } from "react";
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
      <div className="btnSection">
        <button onClick={counterUp}>
          +
        </button>
        <button onClick={counterDown}>
          -
        </button>
      </div>
    </div>
  )};

export default ItemCount;
*/