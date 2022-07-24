import React, { useState } from "react";
import "../ItemCount/ItemCount.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [stocks, setStock] = useState(stock);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      setStock(stocks - 1);
    } else {
      warning();
    }
  };

  const counterDown = () => {
    if (counter > initial) {
      setCounter(counter - 1);
      setStock(stocks + 1);
    }
  };

  const warning = () => {
    toast.warn(`No se puede agregar mas de ${counter} productos`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="counterC">
      <p className="cant">Cantidad: {counter}</p>
      <button variant="contained" className="btn1" onClick={counterUp}>
        +
      </button>
      <button variant="contained" className="btn2" onClick={counterDown}>
        -
      </button>
      <button
        variant="contained"
        className="btn3"
        onClick={() => onAdd(counter)}
      >
        Comprar
      </button>
      <ToastContainer />
    </div>
  );
};

export default ItemCount;
