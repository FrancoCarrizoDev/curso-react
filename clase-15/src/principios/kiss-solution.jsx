import { useState, useEffect } from "react";

// Componente simple
const SimpleComponent = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulamos una llamada a una API
    fetch("https://api.example.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.name.includes(searchTerm) || item.description.includes(searchTerm)
  );

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

export default SimpleComponent;
