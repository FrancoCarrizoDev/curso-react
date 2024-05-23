import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useProductById(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log({ product });

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "products", productId);
    getDoc(productRef)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({
            id: doc.id,
            ...doc.data(),
          });
        } else {
          alert("No such document!");
        }
      })
      .finally(() => setLoading(false));
  }, [productId]);

  return {
    product,
    loading,
  };
}
