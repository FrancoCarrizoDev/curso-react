import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useProductsFirebase() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => doc.data()));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    products,
    loading,
  };
}
