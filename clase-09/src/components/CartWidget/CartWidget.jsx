import { useState } from "react";
import "./CartWidget.css";
import CartIcon from "../CartIcon/CartIcon";

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
