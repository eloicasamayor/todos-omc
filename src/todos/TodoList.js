import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdated }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onTodoUpdated={onTodoUpdated} />
      ))}
    </ul>
  );
}
