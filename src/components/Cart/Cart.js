import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";


const Cart = () => {
  const { cart, removeItem, getQuantity, clear, getTotalPrice} = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Tu Carrito de compras</h2>
      <div className={cart.length === 0 ? "emptyCart" : "hidden"}>
        <h3>No tenes productos en tu carrito</h3>
        <Link to={`/`} className="btn-back">
          <h2>Volver a comprar</h2>
        </Link>
      </div>
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
                  <p> Precio total: {products.price * products.number} $</p>
                  <button onClick={() => removeItem(products.id)}>
                    Eliminar del carrito
                  </button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <div className= {cart.length !== 0 ? "cart" : "hidden"}>
      <p>Cantidad de productos en el carrito: {getQuantity()}</p>
      <p>El total es: {getTotalPrice()} $ </p>
      {cart.length >= 2 ? <button onClick={() => clear()}> Vaciar Carrito </button> : null}
      <Link to= '/checkout'> <button> Ir a pagar </button> </Link>
      </div>
    </div>
  );
};

export default Cart;
