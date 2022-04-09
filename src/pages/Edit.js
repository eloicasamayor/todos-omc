import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { requestTodos } from "../redux/todos";
import { useEffect } from "react";
import { requestUpdateTodo } from "../redux/todos";
export function Edit() {
  const dispatch = useDispatch();
  const loadTodos = () => dispatch(requestTodos());

  const params = useParams();
  const todo = useSelector((state) =>
    state.todos.find((t) => t.id === params.todoId)
  );
  const titleInputRef = useRef();
  const useridInputRef = useRef();
  const completedSelectRef = useRef();

  useEffect(() => {
    loadTodos();
  }, []);

  if (typeof todo !== "undefined") {
    return (
      <div className="p-3">
        <h2>Edit the todo</h2>
        <form>
          <div className="col">
            <label htmlFor="completed">title</label>
            <input
              className="form-control"
              type="text"
              defaultValue={todo.title}
              ref={titleInputRef}
            />
          </div>
          <div className="col">
            <label htmlFor="completed">userId</label>
            <input
              type="number"
              className="form-control"
              cols={50}
              rows={3}
              defaultValue={todo.userid}
              ref={useridInputRef}
            />
          </div>
          <div className="col">
            <label htmlFor="completed">Completed?</label>
            <select
              className="form-control"
              ref={completedSelectRef}
              name="completed"
              id="completed"
              defaultValue={false}
              onChange={console.log()}
              required
            >
              <option value={true}>Completed</option>
              <option value={false}>Not completed</option>
            </select>
          </div>
          <div
            className="d-flex p-3 justify-content-center"
            style={{ gap: "12px" }}
          >
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  requestUpdateTodo({
                    ...todo,
                    title: titleInputRef.current.value,
                    userid: useridInputRef.current.value,
                  })
                );
              }}
            >
              edit
            </button>
            <Link to="/" className="btn btn-secondary">
              cancel
            </Link>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <h2>Oh, no!...</h2>
        <p>Sorry, the item was not found </p>
        <Link to="/">back to home</Link>
      </>
    );
  }
}
