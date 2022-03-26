import { useRef, useState } from "react";

export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function TodoItem({
  todo,
  onTodoUpdated,
  onTodoDeleted,
  filters,
  searching,
}) {
  const [editing, setEditing] = useState(false);
  let titleInputRef = useRef();
  let detailsInputRef = useRef();

  const highlightText = (text) => {
    let highlight = filters.searchquery;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    let partsToCompare = [...parts];
    if (filters.casesensitive) {
      partsToCompare = parts.map((p) => p.toLowerCase());
    }
    return (
      <p>
        {partsToCompare.map((part, i) =>
          part === highlight ? <mark>{parts[i]}</mark> : parts[i]
        )}
      </p>
    );
  };
  return (
    <>
      <li className={todo.completed ? "completed" : "pending"}>
        {!editing ? (
          <span
            onClick={() => {
              onTodoUpdated({ ...todo, completed: !todo.completed });
            }}
          >
            {searching ? (
              <>
                {highlightText(todo.title)}
                {highlightText(todo.details)}
              </>
            ) : (
              <>
                <p>{todo.title}</p>
                <p>{todo.details}</p>
              </>
            )}
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
          <button
            onClick={() => {
              onTodoUpdated({ ...todo, completed: !todo.completed });
            }}
          >
            {todo.completed ? "mark as uncompleted" : "mark as completed"}
          </button>
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
