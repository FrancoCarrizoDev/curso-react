import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";
import CartContext from "../../contexts/CartContext/CartContext";

export default function NavBar() {
  const { cart } = useContext(CartContext);

  const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center">
      <CategoryList />
      <div className={`${cart.length === 0 ? "hidden" : ""}`}>
        <CartWidget cartCount={calculateQuantity} />
      </div>
    </div>
  );
}
