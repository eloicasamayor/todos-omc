import { useRef, useState } from "react";

export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
  const [editing, setEditing] = useState(false);
  let inputRef = useRef();
  return (
    <>
      <li
        className={todo.completed ? "completed" : "pending"}
        onClick={() => onTodoUpdated({ ...todo, completed: !todo.completed })}
      >
        {!editing ? (
          todo.title
        ) : (
          <input type="text" defaultValue={todo.title} ref={inputRef} />
        )}
      </li>

      {!editing ? (
        <>
          <button
            onClick={() => {
              setEditing((e) => true);
            }}
          >
            editar
          </button>
          <button onClick={() => onTodoDeleted(todo)}>borrar</button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setEditing((e) => false);
            }}
          >
            cancel
          </button>
          <button
            onClick={() => {
              onTodoUpdated({ ...todo, title: inputRef.current.value });
              setEditing((e) => false);
            }}
          >
            confirmar edicio
          </button>
        </>
      )}
    </>
  );
}
