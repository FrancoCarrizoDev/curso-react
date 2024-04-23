import { useEffect, useState } from "react";

const MAX_PRODUCTS_TO_SHOW = 10;

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    description: "Quis labore amet ex mollit excepteur.",
    categoria: "electronica",
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "Officia excepteur aliqua aliqua veniam veniam et occaecat duis.",
    categoria: "electronica",
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "Reprehenderit in non culpa qui adipisicing reprehenderit enim esse sunt ea esse proident fugiat.",
    categoria: "electronica",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Dolore laborum laborum laborum laborum.",
    categoria: "electronica",
  },
];

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    return new Promise((resolve) => {
      // Simular una petición fetch que obtenga los productos
      setTimeout(() => {
        resolve(MOCK_PRODUCTS);
      }, 1000); // Simular un tiempo de espera de 1 segundo
    });
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product, i) => {
          return (
            <div key={i}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
