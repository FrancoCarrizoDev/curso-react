import "./App.css";
import Brand from "./components/Brand";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <div className="header__wrapper">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer saludo="Hola a todos y todas!!!" />
    </div>
  );
}

export default App;
