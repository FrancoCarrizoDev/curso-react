import "./CategoryList.css";

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        <li>
          <a href="/#">Moda</a>
        </li>
        <li>
          <a href="/#">Tecnología</a>
        </li>
        <li>
          <a href="/#">Deportes</a>
        </li>
        <li>
          <a href="/#">Hogar</a>
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;
