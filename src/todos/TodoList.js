import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onUpdated }) {
  console.log("todos = ", todos);
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onUpdated={onUpdated} />
      ))}
    </ul>
  );
}
