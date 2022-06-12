import '../Navigation/Navigation.css';
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';

const Navigation = () => {
return(
<nav className= "circle">
<ul>
  <li><a className="active" href="#home">Inicio</a></li>
  <li><a href="#products">Productos</a></li>
  <li><a href="#gaming">Componentes</a></li>
  <li><a href="#contact">Pc Armadas y Notebook</a></li>
  <CartWidget />
</ul>
</nav>
)
};

export default Navigation;