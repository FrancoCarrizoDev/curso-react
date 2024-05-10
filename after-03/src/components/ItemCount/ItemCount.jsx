import "./ItemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
  return (
    <div className="item--count__container">
      <div className="item--count--counter__container">
        <button
          className="item--count-button bg-slate-200 rounded-md "
          onClick={decrement}
          disabled={count <= 0}
        >
          -
        </button>
        <span className="item--count-button">{count}</span>
        <button
          className="item--count-button bg-slate-200 rounded-md"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}
