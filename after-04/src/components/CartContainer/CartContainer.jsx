import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div className="pt-3">
      <div className="min-h-[75vh]">
        <h2 className="text-2xl font-semibold">Mi Carrito</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <CartDetails cart={cart} cartTotal={cartTotal} />
        )}
      </div>
      <div className="flex gap-5 justify-end">
        <button
          className="mt-3 bg-red-400 text-white rounded-md px-2 py-1"
          onClick={clearCart}
        >
          Limpiar carrito
        </button>
        <Link
          className="mt-3 bg-blue-400 text-white rounded-md px-2 py-1"
          to="/checkout"
        >
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
}
