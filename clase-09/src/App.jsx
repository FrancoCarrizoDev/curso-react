import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pokemon from "./components/Pokemon/Pokemon";
import ProductList from "./views/ProductList";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:categoryName" element={<ProductList />} />
          <Route path="/pokemons" element={<h1>Listado de pokemos 1</h1>} />
          <Route path="/pokemon/:pokemonId" element={<Pokemon />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
