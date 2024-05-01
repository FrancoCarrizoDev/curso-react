import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div>
      <h1>Pokemon n° {pokemonId}</h1>
      <h2>{pokemon?.name}</h2>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  );
}
