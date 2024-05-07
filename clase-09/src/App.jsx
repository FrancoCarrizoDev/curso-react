import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pokemon from "./components/Pokemon/Pokemon";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moda" element={<h1>Sección de moda</h1>} />
          <Route path="/pokemons" element={<h1>Listado de pokemos 1</h1>} />
          <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
          <Route
            path="/category/:categoryName"
            element={<h1>Categoría de pokemon</h1>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
