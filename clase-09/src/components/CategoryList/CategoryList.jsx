import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/moda",
    label: "Moda",
  },
  {
    path: "/category/tecnologia",
    label: "Tecnología",
  },
  {
    path: "/category/deportes",
    label: "Deportes",
  },
  {
    path: "/category/hogar",
    label: "Hogar",
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
