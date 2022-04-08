import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectLogin } from "../redux/login/selectors";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ENDPOINT = "https://todos-server-ohmycode.herokuapp.com/todos";
export function TodoItem({ todo, onTodoUpdated, onTodoDeleted, filters }) {
  const [editing, setEditing] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const current_user = useSelector(selectLogin);
  let titleInputRef = useRef();
  let useridInputRef = useRef();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete todo modal"
      >
        <h4 className="card-title">Are you sure to delete the todo?</h4>
        <h5 className="card-subtitle">This operation cannot be undone.</h5>
        <hr />
        <p className="text-center blockquote">{todo.title}</p>
        <hr />
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-danger"
            onClick={() => onTodoDeleted(todo)}
          >
            Yes! delete the todo
          </button>
          <button className="btn btn-secondary" onClick={() => closeModal()}>
            cancel
          </button>
        </div>
      </Modal>
      <li
        className={
          todo.completed
            ? "list-group-item completed"
            : "list-group-item pending"
        }
      >
        {!editing ? (
          <span>
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
        {current_user._id === todo.userid && (
          <div className="btn-group">
            {!editing ? (
              <>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setEditing((e) => true);
                  }}
                >
                  quick edit
                </button>
                <Link className="btn btn-secondary" to={`/edit/${todo.id}`}>
                  edit page
                </Link>
                <button className="btn btn-danger" onClick={() => openModal()}>
                  delete
                </button>
                <button
                  className={
                    todo.completed ? "btn bg-warning" : "btn bg-success"
                  }
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
              </>
            )}
          </div>
        )}
      </li>
    </div>
  );
}
