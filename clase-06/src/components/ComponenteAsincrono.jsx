import { useState } from "react";

export default function ComponenteAsincrono() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    console.log("Antes de la operación asíncrona");
    // Operación asíncrona
    asyncOperation()
      .then((result) => {
        console.log("Desde el then de la operación asíncrona:", result);
      })

      .catch((error) => {
        console.error("Desde el catch de la operación asíncrona:", error);
      })
      .finally(() => {
        setLoading(false);
        console.log("Desde el finally de la operación asíncrona");
      });
  };

  const asyncOperation = () => {
    return new Promise((resuelta, rechazada) => {
      setTimeout(() => {
        resuelta("Operación asíncrona resuelta exitosamente");
      }, 3000); // Simulando una operación asíncrona que tarda 2 segundos
    });
  };

  return (
    <div>
      {loading ? <p>Cargando...</p> : null}
      <button onClick={handleClick}>Operación Asíncrona</button>
    </div>
  );
}
