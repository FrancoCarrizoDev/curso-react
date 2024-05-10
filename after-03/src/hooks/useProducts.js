import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../mock/asyncMock";

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (categoryName) {
      getProductsByCategory(categoryName)
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    } else {
      getProducts()
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    }
  }, [categoryName]);

  return { products, isLoading };
}
