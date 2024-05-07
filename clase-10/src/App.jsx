import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);
  const [error, setError] = useState(false);

  const handleResize = (event) => {
    setWidth(event.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onInput = (event) => {
    console.log(event.key);
    if (isNaN(event.key)) {
      setError(true);
      event.preventDefault();
    }
  };

  return (
    <>
      {/* <h1>Eventos</h1>
      <p>{width}</p> */}
      <label>Ingrese cantidad de productos a llevar</label>
      <br />
      <input onKeyDown={onInput} type="number" />
      {error && <p style={{ color: "red" }}>Solo se permiten números</p>}
    </>
  );
}

export default App;
