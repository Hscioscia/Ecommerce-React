import { createContext, useState} from 'react'

const CartContext = createContext([]);

  const CartProvider = ({ children }) => { 
  const [cart, setCart] = useState([])

  const addItem = (products) =>{

    const fnd = cart.find(prod => products.id === prod.id);

      if (fnd !== -1) {
          const newArray = cart
          const quant = cart[fnd] + products
          newArray[fnd] = quant
          setCart([...newArray])
      } else {
          setCart([
              ...cart,
              products
          ])
      }
    console.log("Product:", products);
};

  const isInCart = (id) =>{
    return cart.some(e => e.products.id === id)
};

  const clear = () =>{
    setCart([])
};

const removeItem = (id) => {
    setCart(cart.filter(products => products.id !== id))
};

return(
     <CartContext.Provider value={{cart, setCart, addItem, clear, isInCart, removeItem}}>
        {children}
    </CartContext.Provider>
)};

export { CartProvider, CartContext };