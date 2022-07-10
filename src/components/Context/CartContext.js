import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (products) => {
    if (isInCart(products.id)) {
      const cartAux = cart.map((i) => {
        if (i.id === products.id) {
          i.number = products.number + i.number;
        }
        return i;
      });
      setCart(cartAux);
    } else {
      setCart([...cart, products]);
    }
    console.log("Product:", products);
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((products) => products.id !== id));
  };

  const getQuantity = () =>{
    let amount = 0;
    cart.forEach(i => amount = amount + i.number)
    return amount;
  };
 
  /*
     const totalCart = () => {    
      return cart.reduce((products) => parseInt(products.price) * parseInt(products.getQuantity), 0);
    }

  */

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, clear, isInCart, removeItem, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
