import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartContext/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
