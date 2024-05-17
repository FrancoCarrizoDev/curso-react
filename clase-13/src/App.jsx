import { useState } from "react";
import "./App.css";
import useProducts from "./hooks/useProducts";
import Item from "./components/item";
import { collection, getFirestore, addDoc } from "firebase/firestore";

function App() {
  const { loading, products } = useProducts();
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    lastName: "",
  });
  const [cart, setCart] = useState([]);
  const [idOrderGuardada, setIdOrderGuardada] = useState("");
  console.log(products);

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = (product, count) => {
    setCart([...cart, { product, count }]);
  };

  const totalCart = cart.reduce((acc, item) => {
    return acc + item.product.price * item.count;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const order = {
      buyer,
      cart,
      totalCart,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setIdOrderGuardada(id));
  };

  console.log(buyer);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {idOrderGuardada && (
        <p>
          Compra realizada con éxito, tu número de orden es: {idOrderGuardada}
        </p>
      )}
      {products.map((product) => (
        <Item key={product.id} product={product} onAdd={onAdd} />
      ))}
      <p>total: ${totalCart}</p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
      >
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Nombre del comprador"
          name="name"
          value={buyer.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={buyer.email}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Apellido</label>
        <input
          type="text"
          placeholder="Apellido"
          name="lastName"
          value={buyer.lastName}
          onChange={handleInputChange}
        />
        <button type="submit">Comprar</button>
      </form>
    </>
  );
}

export default App;
