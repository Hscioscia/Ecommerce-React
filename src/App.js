import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navigation from './components/Navigation/Navigation.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <h1>Tienda Online DeGamers</h1>
      <ItemListContainer />
      <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
