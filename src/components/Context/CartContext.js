import { createContext, useState, useContext} from 'react'

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => { 
  const [cart, setCart] = useState([])

  const addItem = (product) =>{
    if(cart.length === 0){
        setCart([{Producto: product}])
        }
        else{
            setCart([...cart, {product}])
        }
    }

  const isInCart = (id) =>{
    return cart.some(e => e.product.id === id)
};

  const clear = () =>{
    setCart([])
};

const removeItem = (id) => {
    setCart(cart.filter(product => product.id !== id))
};

return(
     <CartContext.Provider value={{cart, setCart, addItem, clear, isInCart, removeItem}}>
        {children}
    </CartContext.Provider>
)};
