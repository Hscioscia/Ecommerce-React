import "./App.css";
import React, { useState } from "react";
//Componentes y BrowserRouter
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navigation from "./components/Navigation/Navigation.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Theme Component
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Theme/Theme";
import SwithTheme from "./components/Theme/SwithTheme";
import MainTitle from "./components/Theme/Title";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CartProvider>
          <div className="App">
            <GlobalStyles />
            <header className="App-header">
              <Navigation />
              <MainTitle />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart/" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </header>
            <SwithTheme
              onChange={() => toggleTheme()}
              text={theme === "light" ? "Light" : "Dark"}
            />
          </div>
        </CartProvider>
      </ThemeProvider>
      <Footer />
    </Router>
  );
}

export default App;
