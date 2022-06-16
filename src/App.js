import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <ItemListContainer greeting= 'Bienvenidos a mi Ecommerce'/>
      <h1>Tienda Online DeGamers</h1>
      <ItemCount />
      </header>
    </div>
  );
}

export default App;
