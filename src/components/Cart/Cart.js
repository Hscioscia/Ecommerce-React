import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";

const Cart = () => {
  const { cart, removeItem, getQuantity, clear, getTotalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Tu Carrito de compras</h1>
      <div className={cart.length === 0 ? "emptyCart" : "hidden"}>
        <p className="empty-cart">No tenes productos en tu carrito </p>
        <Link to={`/`} className="btn-back">
          <h3>Volver al listado de productos</h3>
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
                <div className="checkContainer">
                  <h4>{products.name}</h4>
                  <p> Precio por Unidad: {products.price} $</p>
                  <p> Precio total: {products.price * products.number} $</p>
                  <button onClick={() => removeItem(products.id)}>🗑️</button>
                </div>
                <hr></hr>
              </li>
            </div>
          );
        })}
      </ul>
      <div className={cart.length !== 0 ? "cart" : "hidden"}>
        <p>Cantidad de productos en el carrito: {getQuantity()}</p>
        <p>El total es: {getTotalPrice()} $ </p>
        {cart.length >= 2 ? (
          <button className="btn-clearCart" onClick={() => clear()}>
            {" "}
            Vaciar Carrito{" "}
          </button>
        ) : null}
        <Link to="/checkout">
          {" "}
          <button className="btn-checkoutPay"> Ir a pagar </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
