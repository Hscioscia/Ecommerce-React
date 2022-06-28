import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navigation from './components/Navigation/Navigation.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navigation />
        <h1>TIENDA CHIC</h1>
        <Routes>
          <Route path= '/' element = {<ItemListContainer />} />
          <Route path='/category/:categoryId' element = {<ItemListContainer />} />
          <Route path='/item/:id' element =  {<ItemDetailContainer />} />
        </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
