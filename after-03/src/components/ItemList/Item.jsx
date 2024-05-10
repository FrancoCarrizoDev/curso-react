import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ item }) {
  return (
    <div className="item__container">
      <div className="item--img__container">
        <img className="item--img" src={item.image} alt={item.title} />
      </div>
      <Link to={`/product/${item.id}`}>
        <h2 className="item--title">{item.title}</h2>
      </Link>
      <p className="item--description">{item.description}</p>
      <p className="item--price">${item.price}</p>
    </div>
  );
}
