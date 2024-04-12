import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar__wrapper">
      <CategoryList />
      <CartWidget />
    </div>
  );
}
