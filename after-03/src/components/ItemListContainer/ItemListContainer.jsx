import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();
  const { isLoading: productsLoading, products } = useProducts(categoryName);

  if (productsLoading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
