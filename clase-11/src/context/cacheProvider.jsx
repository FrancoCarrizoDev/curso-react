import React, { useState } from "react";
import CacheContext from "./cacheContext";

export default function CacheProvider({ children }) {
  const [cache, setCache] = useState([]);

  const addToCache = (newItem) => {
    setCache([...cache, newItem]);
  };

  const getFromCache = (id) => {
    return cache.find((item) => item.id === id);
  };

  const removeFromCache = (id) => {
    setCache(cache.filter((item) => item.id !== id));
  };

  return (
    <CacheContext.Provider
      value={{ cache, getFromCache, addToCache, removeFromCache }}
    >
      {children}
    </CacheContext.Provider>
  );
}
