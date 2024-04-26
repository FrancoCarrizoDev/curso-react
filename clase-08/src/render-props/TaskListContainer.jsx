import Filter from "./Filter";
import TaskLists from "./TaskLists";

export default function TaskListContainer() {
  const tasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
    { id: 3, name: "Task 3", completed: false },
    { id: 4, name: "Task 4", completed: true },
  ];

  return (
    <div>
      <Filter>
        {(filterState, handleFilterChange) => (
          <div>
            <TaskLists
              tasks={tasks.filter(
                (task) =>
                  filterState === "all" ||
                  (filterState === "completed" && task.completed) ||
                  (filterState === "pending" && !task.completed)
              )}
            />
            <select value={filterState} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        )}
      </Filter>
    </div>
  );
}
