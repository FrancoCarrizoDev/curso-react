import "./App.css";
import LoginContainer from "./hoc/LoginContainer";
import TaskListContainer from "./custom-hook/TaskListContainer";
import usePokemons from "./custom-hook/usePokemons";

function App() {
  const pokemons = usePokemons();

  console.log(pokemons);
  return (
    <>
      {/* <LoginContainer /> */}
      {/* <UserFormContainer /> */}

      {/* <TaskListContainer /> */}
    </>
  );
}

export default App;
