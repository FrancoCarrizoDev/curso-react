import React, { useContext } from "react";
import "./App.css";
import CacheProvider from "./context/cacheProvider";
import CacheContext from "./context/cacheContext";

const PRODUCTS = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

function App() {
  return (
    <div>
      <CacheProvider>
        {/* <Header /> */}
        <ProductList />
        <CacheList />
        {/* <Footer /> */}
      </CacheProvider>
    </div>
  );
}

function ProductList() {
  const { addToCache } = useContext(CacheContext);
  return (
    <div>
      <h1>ProductList</h1>
      {PRODUCTS.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => addToCache(product)}>Agregar al cache</button>
        </div>
      ))}
    </div>
  );
}

function CacheList() {
  const { cache, removeFromCache } = useContext(CacheContext);

  return (
    <div>
      <h1>CacheList</h1>
      {cache.map((products) => (
        <div key={products.id}>
          <p>{products.name}</p>
          <button onClick={() => removeFromCache(products.id)}>
            Eliminar del cache
          </button>
        </div>
      ))}
    </div>
  );
}

function Header() {
  const { cache, getFromCache, addToCache } = useContext(CacheContext);
  console.log(cache);
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

function Footer() {
  const { cache, getFromCache, addToCache } = useContext(CacheContext);
  console.log(cache);
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
