import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemListContainer />} />
          <Route path="/checkout" element={<ItemListContainer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
