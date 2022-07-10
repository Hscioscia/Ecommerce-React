import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, getQuantity, clear} = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Tu Carrito de compras</h2>
      <div className={cart.length === 0 ? "emptyCart" : "hidden"}>
        <h3>No tenes productos en tu carrito</h3>
        <Link to={`/`} className="btn-back">
          <h2>Volver a comprar</h2>
        </Link>
      </div>
      <p>Cantidad de productos en el carrito: {getQuantity()}</p>
      {cart.length >= 2 ? <button onClick={() => clear()}> Vaciar Carrito </button> : null}
      <ul className={cart.length !== 0 ? "cart" : "hidden"}>
        {cart.map((products) => {
          return (
            <div className="cart-products" key={products.id}>
              <li className="cart-list">
                <img
                  src={products.img}
                  alt={products.name}
                  className="cart-img"
                />
                <div>
                  <h4>{products.name}</h4>
                  <p> Precio por Unidad: {products.price} $</p>
                  <p> Precio total: {products.price * products.quantity} $</p>
                  <button onClick={() => removeItem(products.id)}>
                    Eliminar del carrito
                  </button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
