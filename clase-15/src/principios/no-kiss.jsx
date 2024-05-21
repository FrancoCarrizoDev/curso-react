import { useState, useEffect } from "react";

// Función compleja para filtrar elementos
const complexFilterFunction = (items, search) => {
  return items.filter((item) => {
    if (item.name.includes(search) || item.description.includes(search)) {
      return true;
    }
    return false;
  });
};

// Componente complejo
const ComplexComponent = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Simulamos una llamada a una API
    fetch("https://api.example.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  useEffect(() => {
    const results = complexFilterFunction(items, searchTerm);
    setFilteredItems(results);
  }, [items, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
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

export default ComplexComponent;
