import { useState, useEffect } from "react";

// Componente reutilizable para una lista de ítems con búsqueda
const ItemList = ({ apiEndpoint, placeholder }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) =>
        console.error(`Error fetching items from ${apiEndpoint}:`, error)
      );
  }, [apiEndpoint]);

  const filteredItems = items.filter((item) => item.name.includes(searchTerm));

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const DryComponent = () => {
  return (
    <div>
      <ItemList
        apiEndpoint="https://api.example.com/itemsA"
        placeholder="Search items A"
      />
      <ItemList
        apiEndpoint="https://api.example.com/itemsB"
        placeholder="Search items B"
      />
    </div>
  );
};

export default DryComponent;
