import React, { useContext, useState } from "react";
import "./App.css";

const ThemeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={handleChangeDarkMode}>Cambiar Modo</button>
      <ThemeContext.Provider value={isDarkMode}>
        <Header />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

function Header() {
  const isDarkMode = useContext(ThemeContext);
  console.log(isDarkMode);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h1>Header</h1>
    </div>
  );
}

function Footer() {
  const isDarkMode = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
      }}
    >
      <h1>Footer</h1>
    </div>
  );
}

export default App;
