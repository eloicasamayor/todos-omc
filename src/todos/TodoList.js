import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onUpdated }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onUpdated={onUpdated} />
      ))}
    </ul>
  );
}
