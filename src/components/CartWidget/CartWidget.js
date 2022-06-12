import {FaShoppingCart} from 'react-icons/fa';
import '../CartWidget/CartWidget.css'
const CartWidget = () => {
return(  
    <div className='cartIcon'>
    <FaShoppingCart/>
    <p>3</p>
    </div>
)};

export default CartWidget;