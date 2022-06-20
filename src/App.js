import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navigation from './components/Navigation/Navigation.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <h1>Tienda Online DeGamers</h1>
      <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
