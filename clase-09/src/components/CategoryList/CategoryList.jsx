import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/moda",
    label: "Moda",
  },
  {
    path: "/tecnologia",
    label: "Tecnología",
  },
  {
    path: "/deportes",
    label: "Deportes",
  },
  {
    path: "/hogar",
    label: "Hogar",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        {MIS_RUTAS.map((ruta) => (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList;
