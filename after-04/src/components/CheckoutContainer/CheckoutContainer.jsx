import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import CartDetails from "../CartDetails/CartDetails";
import useBuyer from "../../hooks/useBuyer";

export default function CheckoutContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  const { buyer, handleInputChange } = useBuyer();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const db = getFirestore();
    // antes de hacer el addDoc, verifico que haya stock suficiente para todos los productos
    for (const itemInCart of cart) {
      const productRef = doc(db, "products", itemInCart.product.id);
      const product = await getDoc(productRef);
      const productData = product.data();
      if (productData.stock < itemInCart.quantity) {
        alert(`No hay stock suficiente para el producto ${productData.title}`);
        // el return corta el flujo de toda función, si no hay stock suficiente, no hago el addDoc
        return;
      }
    }

    // si tengo stock de todos los productos, entonces hago el addDoc
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(async ({ id }) => {
      alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
      clearCart();

      // si la compra se realizó correctamente (por eso este código va en el .then()), actualizo mi stock de productos en firestore

      for (const itemInCart of cart) {
        const productRef = doc(db, "products", itemInCart.product.id);
        const product = await getDoc(productRef);
        const productData = product.data();

        const newStock = productData.stock - itemInCart.quantity;

        await updateDoc(productRef, { stock: newStock });
      }
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
