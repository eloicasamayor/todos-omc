import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const initialValues = { title: "", userId: "", completed: false };
  const [todoValidationResult, setTodoValidationResult] = useState(false);
  const [newTodo, setNewTodo] = useState(initialValues);
  const titleInputRef = useRef();
  const useridInputRef = useRef();
  const completedSelectRef = useRef();
  const handleChange = () => {
    let titleLenght = titleInputRef.current.value.length;
    let userId = parseInt(useridInputRef.current.value);
    if (titleLenght === 0 || titleLenght > 10) {
      setTodoValidationResult((n) => false);
    } else if (userId < 0 || !userId) {
      setTodoValidationResult((n) => false);
    } else {
      setNewTodo({
        title: titleInputRef.current.value,
        userid: parseInt(useridInputRef.current.value),
        completed: completedSelectRef.current.value === "true",
      });
      setTodoValidationResult((n) => true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit...");
    titleInputRef.current.value = "";
    useridInputRef.current.value = "";
    onAddTodo({ ...newTodo });
  };
  const validate = (values) => {};
  return (
    <div className="card card-body">
      <h2>Add a todo</h2>
      <pre>{JSON.stringify(newTodo)}</pre>
      <form onSubmit={(e) => handleSubmit(e)} id="new-todo-form">
        <div className="row">
          <div className="col">
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
            <small className="form-text text-muted">Un text petit a sota</small>
          </div>
          <div className="col">
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
            <small className="form-text text-muted">Un text petit a sota</small>
          </div>
          <div className="col">
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
            <small className="form-text text-muted">Un text petit a sota</small>
          </div>
        </div>
        {todoValidationResult && (
          <input type="submit" className="btn btn-primary" value="add"></input>
        )}
      </form>
    </div>
  );
}
