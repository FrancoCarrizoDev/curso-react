export default function TaskLists({ tasks }) {
  return (
    <div>
      <h2>Task Lists</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
