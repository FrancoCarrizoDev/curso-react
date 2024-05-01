import { useEffect, useState } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProduct(id) {
  const [product, setProduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { product, isLoading };
}
