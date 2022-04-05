import { useRef, useState } from "react";

export const ENDPOINT = "https://todos-server-ohmycode.herokuapp.com/todos";
export function TodoItem({ todo, onTodoUpdated, onTodoDeleted, filters }) {
  const [editing, setEditing] = useState(false);
  let titleInputRef = useRef();
  let useridInputRef = useRef();

  const highlightText = (text) => {
    let highlight = filters.searchquery;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    let partsToCompare = [...parts];
    if (!filters.casesensitive) {
      partsToCompare = parts.map((p) => p.toLowerCase());
      highlight = highlight.toLowerCase();
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
    <div>
      <li
        className={
          todo.completed
            ? "list-group-item completed"
            : "list-group-item pending"
        }
      >
        {!editing ? (
          <span
            onClick={() => {
              onTodoUpdated({ ...todo, completed: !todo.completed });
            }}
          >
            {filters.searchquery !== "" ? (
              <>
                <h4 className="card-title">{highlightText(todo.title)}</h4>
                <p>{todo.userid}</p>
              </>
            ) : (
              <>
                <h4 className="card-title">{todo.title}</h4>
                <p>User ID: {todo.userid}</p>
              </>
            )}
          </span>
        ) : (
          <>
            <input
              className="form-control"
              type="text"
              defaultValue={todo.title}
              ref={titleInputRef}
            />

            <input
              type="number"
              className="form-control"
              cols={50}
              rows={3}
              defaultValue={todo.userid}
              ref={useridInputRef}
            />
          </>
        )}
        {!editing ? (
          <div className="btn-group">
            <button
              className="btn btn-secondary"
              onClick={() => {
                setEditing((e) => true);
              }}
            >
              edit
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onTodoDeleted(todo)}
            >
              delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                onTodoUpdated({ ...todo, completed: !todo.completed });
              }}
            >
              {todo.completed ? "mark as uncompleted" : "mark as completed"}
            </button>
          </div>
        ) : (
          <div className="btn-group">
            <button
              className="btn btn-secondary"
              onClick={() => {
                setEditing((e) => false);
              }}
            >
              cancel
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                onTodoUpdated({
                  ...todo,
                  title: titleInputRef.current.value,
                  userid: useridInputRef.current.value,
                });
                setEditing((e) => false);
              }}
            >
              confirm edit
            </button>
          </div>
        )}
      </li>
    </div>
  );
}
