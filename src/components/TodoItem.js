import { useRef, useState } from "react";

export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function TodoItem({ todo, onTodoUpdated, onTodoDeleted, filters }) {
  const [editing, setEditing] = useState(false);
  let titleInputRef = useRef();
  let detailsInputRef = useRef();
  return (
    <>
      <li className={todo.completed ? "completed" : "pending"}>
        {!editing ? (
          <span
            onClick={() => {
              onTodoUpdated({ ...todo, completed: !todo.completed });
            }}
          >
            {todo.title}
          </span>
        ) : (
          <>
            <input type="text" defaultValue={todo.title} ref={titleInputRef} />

            <textarea
              cols={50}
              rows={3}
              defaultValue={todo.details}
              ref={detailsInputRef}
            />
          </>
        )}
        <p>{todo.details}</p>
      </li>

      {!editing ? (
        <>
          <button
            onClick={() => {
              setEditing((e) => true);
            }}
          >
            edit
          </button>
          <button onClick={() => onTodoDeleted(todo)}>delete</button>
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
              onTodoUpdated({
                ...todo,
                title: titleInputRef.current.value,
                details: detailsInputRef.current.value,
              });
              setEditing((e) => false);
            }}
          >
            confirm edit
          </button>
        </>
      )}
    </>
  );
}
