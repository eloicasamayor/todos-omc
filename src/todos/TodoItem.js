import { postUpdateTodo } from "./TodosApi";

export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function TodoItem({ todo, onTodoUpdated }) {
  return (
    <li
      className={todo.completed ? "completed" : "pending"}
      onClick={() => onTodoUpdated({ ...todo, completed: !todo.completed })}
    >
      {todo.title}
    </li>
  );
}
