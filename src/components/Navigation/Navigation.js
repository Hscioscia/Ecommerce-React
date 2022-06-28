import '../Navigation/Navigation.css';
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';
import {Link} from 'react-router-dom'

const Navigation = () => {
return(
<nav className= "circle">
<ul>
  <Link to= '/' className='li'>Inicio</Link>
  <Link to= '/category/hombre' className='li'>Hombre</Link>
  <Link to= '/category/mujer' className='li'>Mujer</Link>
  <Link to= '/category/talles' className='li'>Tabla de talles</Link>
</ul>
<CartWidget />
</nav>
)
};

export default Navigation;