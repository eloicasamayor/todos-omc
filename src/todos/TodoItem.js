import { postUpdateTodo } from "./TodosApi";

export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function TodoItem({ todo, onUpdated }) {
  return (
    <li
      className={todo.completed ? "completed" : "pending"}
      onClick={() => postUpdateTodo(todo).then(onUpdated)}
    >
      {todo.title}
    </li>
  );
}
