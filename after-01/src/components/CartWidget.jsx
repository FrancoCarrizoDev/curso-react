import CartIcon from "./CartIcon";
import { useState } from "react";
import "./CartIcon.css";
function CartWidget() {
  const [cartItems, setCartItems] = useState(4);

  return (
    <div className="cart--container">
      <CartIcon ancho={40} alto={40} />
      <span>{cartItems}</span>
    </div>
  );
}

export default CartWidget;
