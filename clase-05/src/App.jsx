import { useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";

// const Layout = (props) => {
//   return (
//     <div>
//       <Header />
//       {props.children}
//       <Footer />
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <div>
//       <h1>Shoppy</h1>
//       <nav>
//         <a href="/">Inicio</a>
//         <a href="/productos">Productos</a>
//         <a href="/contacto">Contacto</a>
//       </nav>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <div>
//       <p>Shoppy 2021</p>
//       <p>Av. Colon 1212</p>
//       <p>Instagram : shopy.ok</p>
//     </div>
//   );
// };

function App() {
  // console.log("me he dibujado");

  // const divRef = useRef(null);

  // const handleClick = () => {
  //   divRef.current.innerHTML = "Contenido cambiado";
  // };

  // const renderCount = useRef(0);
  // let jsCounter = 0;

  // jsCounter++;

  // renderCount.current++;

  // console.log({ jsCounter });

  // const [counter, setCounter] = useState(0);
  // const [posts, setPosts] = useState(0);

  const [vueltas, setVueltas] = useState(0);
  const [tiempoEnSegundos, setTiempoEnSegundos] = useState(0);

  useEffect(() => {
    // setTiempoEnSegundos(0);

    const interval = setInterval(() => {
      setTiempoEnSegundos((tiempoEnSegundos) => tiempoEnSegundos + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (tiempoEnSegundos === 5) {
      setVueltas(vueltas + 1);
      setTiempoEnSegundos(0);
    }
  }, [tiempoEnSegundos]);

  return (
    // <div>
    //   {/* <Layout>
    //     <hr />
    //     <h2>Contador</h2>

    //     <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    //     {counter}
    //     <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
    //     <hr />
    //   </Layout> */}
    //   {/* <h5 ref={divRef}>Contenido original</h5>
    //   <button onClick={handleClick}>Cambiar contenido</button> */}
    // </div>
    // <div>
    //   {/* <p>{counter}</p>
    //   <button onClick={() => setCounter(counter + 1)}>incrementar</button>
    //   <p>Este componente se ha renderizado {renderCount.current} veces</p>
    //   <p>La variable jsCounter se ha dibujado {jsCounter} veces</p>
    //   {post} */}
    // </div>
    // <div>
    //   {JSON.stringify(posts)}
    //   <hr />
    //   <button onClick={() => setCounter(counter + 1)}>incrementar</button>
    //   {counter}
    // </div>

    <div>
      <h1>Reloj</h1>
      <p>Vueltas: {vueltas}</p>
      <p>Tiempo en segundos: {tiempoEnSegundos}</p>

      <button onClick={() => setVueltas(0)}>Reiniciar</button>
    </div>
  );
}

export default App;
