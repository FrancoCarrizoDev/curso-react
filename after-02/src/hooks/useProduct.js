import { useEffect, useState } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProduct(id) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading };
}
