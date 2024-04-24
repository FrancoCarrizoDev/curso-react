import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ul>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        pokemons.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <PokemonCard name={pokemon.name} url={pokemon.url} />
            </li>
          );
        })
      )}
      <li>
        <img
          src="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="pelota de futbol"
        />
      </li>
    </ul>
  );
}

export default App;
