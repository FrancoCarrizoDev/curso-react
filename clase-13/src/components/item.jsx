import useCount from "../hooks/useCount";

export default function Item({ product, onAdd }) {
  const { count, decrement, increment } = useCount();

  const handleAdd = () => {
    onAdd(product, count);
  };

  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <img
        style={{ width: "100px" }}
        src={product.imageUrl}
        alt={product.title}
      />
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
}
