import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdated, onTodoDeleted }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          onTodoUpdated={onTodoUpdated}
          onTodoDeleted={onTodoDeleted}
        />
      ))}
    </ul>
  );
}
