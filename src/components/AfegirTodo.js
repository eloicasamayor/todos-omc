import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const initialValues = { title: "", userId: "", completed: false };

  const [todoValidationResult, setTodoValidationResult] = useState(false);
  const [formErrors, setFormErrors] = useState({
    titleError: "",
    userIdError: "",
  });
  const [newTodo, setNewTodo] = useState(initialValues);

  const titleInputRef = useRef();
  const useridInputRef = useRef();
  const completedSelectRef = useRef();

  const handleChange = () => {
    setNewTodo({
      title: titleInputRef.current.value,
      userid: parseInt(useridInputRef.current.value),
      completed: completedSelectRef.current.value === "true",
    });
    validate();
  };
  const validate = () => {
    let titleLenght = titleInputRef.current.value.length;
    let userId = parseInt(useridInputRef.current.value);
    let titleError = "";
    let userIdError = "";
    if (titleLenght === 0) {
      titleError = "The title cannot be null";
    } else if (titleLenght > 200) {
      titleError = "title must be less than 200 characters";
    }
    if (userId < 0) {
      userIdError = "userId can't be negative";
    } else if (!userId) {
      userIdError = "userId cannot be null";
    }
    setFormErrors({ titleError: titleError, userIdError: userIdError });
    if (titleError === "" && userIdError === "") {
      setTodoValidationResult((n) => true);
    } else {
      setTodoValidationResult((n) => false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit...");
    titleInputRef.current.value = "";
    useridInputRef.current.value = "";
    onAddTodo({ ...newTodo });
    setTodoValidationResult((n) => false);
  };

  return (
    <div className="card card-body  m-2">
      <h2>Add a todo</h2>
      <form onSubmit={(e) => handleSubmit(e)} id="new-todo-form">
        <div className="add-todo-wrapper">
          <div style={{ flex: "1" }}>
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              name="title"
              type="text"
              placeholder="New todo title"
              ref={titleInputRef}
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <small className="form-text text-danger">
              {formErrors.titleError}
            </small>
          </div>
          <div style={{ flex: "1" }}>
            <label htmlFor="userId">user Id</label>
            <input
              className="form-control"
              name="userId"
              type="number"
              min="0"
              ref={useridInputRef}
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <small className="form-text text-danger">
              {formErrors.userIdError}
            </small>
          </div>

          <div style={{ flex: "1" }}>
            <label htmlFor="completed">Completed?</label>
            <select
              className="form-control"
              ref={completedSelectRef}
              name="completed"
              id="completed"
              defaultValue={false}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value={true}>Completed</option>
              <option value={false}>Not completed</option>
            </select>
          </div>

          {todoValidationResult && (
            <input
              style={{ flex: "1" }}
              type="submit"
              className="btn btn-primary mt-3"
              value="add new todo"
            ></input>
          )}
        </div>
      </form>
    </div>
  );
}
