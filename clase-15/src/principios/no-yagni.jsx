import { useState, useEffect } from "react";

// No se necesita manejo de temas o un contador aquí
const NonYagniComponent = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light"); // Funcionalidad innecesaria
  const [count, setCount] = useState(0); // Funcionalidad innecesaria

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const filteredItems = items.filter((item) => item.name.includes(searchTerm));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className={`theme-${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>{" "}
      {/* Botón innecesario */}
      <button onClick={incrementCount}>Increment Count</button>{" "}
      {/* Botón innecesario */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NonYagniComponent;
