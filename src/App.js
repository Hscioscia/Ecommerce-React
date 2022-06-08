import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h1>Tienda Online DeGamers</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
