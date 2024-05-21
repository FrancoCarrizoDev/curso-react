import { useState, useEffect } from "react";

const NonDryComponent = () => {
  const [itemsA, setItemsA] = useState([]);
  const [itemsB, setItemsB] = useState([]);
  const [searchTermA, setSearchTermA] = useState("");
  const [searchTermB, setSearchTermB] = useState("");

  useEffect(() => {
    fetch("https://api.example.com/itemsA")
      .then((response) => response.json())
      .then((data) => setItemsA(data))
      .catch((error) => console.error("Error fetching items A:", error));
  }, []);

  useEffect(() => {
    fetch("https://api.example.com/itemsB")
      .then((response) => response.json())
      .then((data) => setItemsB(data))
      .catch((error) => console.error("Error fetching items B:", error));
  }, []);

  const filteredItemsA = itemsA.filter((item) =>
    item.name.includes(searchTermA)
  );
  const filteredItemsB = itemsB.filter((item) =>
    item.name.includes(searchTermB)
  );

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTermA}
          onChange={(e) => setSearchTermA(e.target.value)}
          placeholder="Search items A"
        />
        <ul>
          {filteredItemsA.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={searchTermB}
          onChange={(e) => setSearchTermB(e.target.value)}
          placeholder="Search items B"
        />
        <ul>
          {filteredItemsB.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NonDryComponent;
