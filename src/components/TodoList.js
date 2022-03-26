import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  onTodoUpdated,
  onTodoDeleted,
  searching,
  filters,
}) {
  return (
    <>
      {searching ? (
        <h1>Search results for "{filters.searchquery}"</h1>
      ) : (
        <>
          <h1>All todos</h1>
        </>
      )}
      {filters.onlyUncompleted && <h2>(showing only uncompleted)</h2>}
      <ul>
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            onTodoUpdated={onTodoUpdated}
            onTodoDeleted={onTodoDeleted}
            searching={searching}
            filters={filters}
          />
        ))}
      </ul>
    </>
  );
}
