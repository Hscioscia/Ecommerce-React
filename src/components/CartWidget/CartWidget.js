import '../CartWidget/CartWidget.css';
import { BsCart } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);
    
return(  
    <div className='cartIcon'>
    <Link to= {'/cart'} ><BsCart /></Link> 
    {getQuantity() || null}
    </div>
)};

export default CartWidget;
