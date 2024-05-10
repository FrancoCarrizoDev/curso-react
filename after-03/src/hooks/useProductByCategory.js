import { useEffect, useState } from "react";
import { getProductsByCategory } from "../mock/asyncMock";

export default function useProductByCategory(category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(category)
      .then((products) => {
        setProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return {
    products,
    loading,
  };
}
