export default function ComponenteSincrono() {
  const handleClick = () => {
    console.log("Antes de la operación síncrona");
    // Operación síncrona
    const result = syncOperation();
    console.log("Después de la operación síncrona:", result);
  };

  const syncOperation = () => {
    return 10 + 5;
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Operación Síncrona</button>
      </div>
    </div>
  );
}
