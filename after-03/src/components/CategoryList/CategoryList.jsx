import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/bolsos",
    label: "Bolsos",
  },
  {
    path: "/category/remeras",
    label: "Remeras",
  },
  {
    path: "/category/camperas",
    label: "Camperas",
  },
  {
    path: "/category/joyas",
    label: "Joyas",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.path}>
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
