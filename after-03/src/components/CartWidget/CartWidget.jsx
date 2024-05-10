import "./CartWidget.css";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";

function CartWidget({ cartCount }) {
  return (
    <Link to={"/cart"}>
      <div className="flex items-center">
        <CartIcon ancho={40} alto={40} />
        <span className="rounded-full px-1 text-white bg-amber-400 font-semibold text-sm">
          {cartCount}
        </span>
      </div>
    </Link>
  );
}

export default CartWidget;
