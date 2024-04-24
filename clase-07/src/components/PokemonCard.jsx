export default function PokemonCard({ name, url }) {
  return (
    <div style={{ padding: "10px", border: "1px solid blue" }}>
      <h3>{name}</h3>

      <p>{url}</p>
    </div>
  );
}
