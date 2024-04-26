import { useEffect, useState } from "react";
import TaskList from "./TasksList";
import FilterOptions from "./FilterOptions";
import { getTasks } from "./asyncMock";
import useFilter from "./useFilter";
import usePokemons from "./usePokemons";

const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const { filter, setFilter, applyFilter } = useFilter();

  const pokemons = usePokemons();
  console.log(pokemons);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const filteredTasks = applyFilter(tasks);

  if (!tasks.length) return <h1>Cargando...</h1>;

  return (
    <main>
      <h1>Aplicación de Tareas</h1>
      <FilterOptions filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </main>
  );
};

export default TaskListContainer;
