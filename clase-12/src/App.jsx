import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Mi aplicación</h1>
      <TextComponent condition={loading} />
    </div>
  );
}

const TextComponent = ({ condition }) => {
  return (
    <h1 className={condition ? "text-blue-500" : "text-red-500"}>Hola mundo</h1>
  );
};

export default App;
