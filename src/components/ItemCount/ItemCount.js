import React, { useState } from "react";
import "../ItemCount/ItemCount.css";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [stocks, setStock] = useState(stock);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      setStock(stocks-1);
    }
    else{
      alert(`No se puede agregar mas de ${counter} productos`)
    }
  };

  const counterDown = () => {
    if (counter > initial) {
      setCounter(counter - 1);
      setStock(stocks+1)
    }
  };

  return (
    <div className="counterC">
      <p className="cant">Cantidad: {counter}</p>
           <button  className="btn1" onClick={counterUp}>+</button>
           <button  className="btn2" onClick={counterDown}>-</button>
           <button  className="btn3"  onClick={() => onAdd(counter)}>Comprar</button>
    </div>
  );
};

export default ItemCount;
