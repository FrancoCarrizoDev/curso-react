import useProducts from "../../hooks/useProducts";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ saludo }) {
  const { isLoading, products } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {/* <h1>{saludo}</h1> */}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
