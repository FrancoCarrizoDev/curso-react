import React, { useContext } from "react";
import "./App.css";
import CartContext, { CART_INITIAL_STATE } from "./context/cartContext";

function App() {
  return (
    <div>
      <CartContext.Provider value={CART_INITIAL_STATE}>
        <Header />
        <h1>Hola mundo </h1>
      </CartContext.Provider>
    </div>
  );
}

const Header = () => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default App;
