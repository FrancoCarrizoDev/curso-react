import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    if (categoryName) {
      const productsQuery = query(
        productsCollection,
        where("categoryName", "==", categoryName)
      );

      getDocs(productsQuery)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setIsLoading(false));
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoryName]);

  return { products, isLoading };
}
