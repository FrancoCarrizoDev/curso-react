import "./App.css";
import useProducts from "./hooks/useProducts";

function App() {
  const { loading, products } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <img
            style={{ width: "100px" }}
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
      ))}
    </>
  );
}

export default App;
