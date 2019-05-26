import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  </Router>
);

export default App;
