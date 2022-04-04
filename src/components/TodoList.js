import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdated, onTodoDeleted, filters }) {
  return (
    <>
      {filters.searchquery !== "" ? (
        <h1>
          Search results for "<mark>{filters.searchquery}</mark>"
        </h1>
      ) : (
        <>
          <h1>All todos</h1>
        </>
      )}
      {filters.onlyUncompleted && <h2>(showing only uncompleted)</h2>}
      <ul className="list-group">
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            onTodoUpdated={onTodoUpdated}
            onTodoDeleted={onTodoDeleted}
            filters={filters}
          />
        ))}
      </ul>
    </>
  );
}
