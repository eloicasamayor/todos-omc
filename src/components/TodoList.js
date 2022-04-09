import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdated, onTodoDeleted, filters }) {
  return (
    <div className="m-1">
      {filters.searchquery !== "" ? (
        <h1 className="ml-2">
          "Search results for "<mark> {filters.searchquery}</mark>
        </h1>
      ) : (
        <h1>"List"</h1>
      )}

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
    </div>
  );
}
