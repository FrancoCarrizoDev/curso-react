import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartDetails from "../CartDetails/CartDetails";

export default function CheckoutContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
      clearCart();
    });
  };

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre del comprador"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            name="lastName"
            value={buyer.lastName}
            onChange={handleInputChange}
          />
        </div>
        <CartDetails cart={cart} cartTotal={cartTotal} />
        <button
          className="mt-3 bg-blue-400 text-white rounded-md px-2 py-1"
          type="submit"
        >
          Comprar
        </button>
      </form>
    </div>
  );
}
