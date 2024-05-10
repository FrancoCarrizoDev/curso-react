import { useContext } from "react";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import CartContext from "../../contexts/CartContext/CartContext";

export default function ItemDetail({ item }) {
  const { count, increment, decrement, reset } = useCount(0);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };

  return (
    <div className="item__container">
      <div className="item--img__container">
        <img className="item--img" src={item.image} alt={item.title} />
      </div>
      <h2 className="item--title">{item.title}</h2>
      <p className="item--description">{item.description}</p>
      <p className="item--price">${item.price}</p>
      <div className="item--counter__container">
        <ItemCount
          stock={item.stock}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <div className="item--cart__container">
        <button
          className="item--cart__button"
          onClick={handleAddToCart}
          disabled={count === 0}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
