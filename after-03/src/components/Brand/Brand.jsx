import { Link } from "react-router-dom";

function Brand() {
  return (
    <div>
      <Link to={"./"}>
        <h1
          style={{
            color: "tomato",
            fontSize: "40px",
          }}
        >
          Shoppy
        </h1>
      </Link>
    </div>
  );
}

export default Brand;
