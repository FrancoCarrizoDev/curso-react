import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();

  const { isLoading, products } = useProducts(categoryName);

  if (isLoading) return <h1>Cargando...</h1>;

  if (products.length === 0)
    return <h1>Ups.. No tenemos productos para mostrarte.</h1>;

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
