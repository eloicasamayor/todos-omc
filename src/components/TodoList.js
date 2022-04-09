import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdated, onTodoDeleted, filters }) {
  return (
    <div className="m-1">
      <h1 className="ml-2">
        {filters.searchquery !== ""
          ? "Search results for " + <mark>{filters.searchquery}</mark>
          : "List"}
      </h1>
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
