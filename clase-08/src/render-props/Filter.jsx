import { useState } from "react";

export default function Filter({ children }) {
  const [filterState, setFilterState] = useState("all");

  const handleFilterChange = (e) => {
    setFilterState(e.target.value);
  };

  return children(filterState, handleFilterChange);
}
