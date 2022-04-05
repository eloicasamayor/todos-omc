import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const initialValues = { title: "", userId: "", completed: false };

  const [todoValidationResult, setTodoValidationResult] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [newTodo, setNewTodo] = useState(initialValues);

  const titleInputRef = useRef();
  const useridInputRef = useRef();
  const completedSelectRef = useRef();

  const handleChange = () => {
    let titleLenght = titleInputRef.current.value.length;
    let userId = parseInt(useridInputRef.current.value);
    
    setNewTodo({
        title: titleInputRef.current.value,
        userid: parseInt(useridInputRef.current.value),
        completed: completedSelectRef.current.value === "true",
      });
    setFormErrors(validate())
    if (titleLenght === 0) {
      setTodoValidationResult((n) => false);
      setFormErrors({ titleError: "toto must have a title" });
    } else if (titleLenght > 10) {
      setTodoValidationResult((n) => false);
      setFormErrors({ titleError: "title must be less than 200 characters" });
    } else if (userId < 0 || !userId) {
      setTodoValidationResult((n) => false);
      setFormErrors({ userIdError: "userId can't be negative" });
    } else {
      setFormErrors({ titleError: "", userIdError: "" });
      
      setTodoValidationResult((n) => true);
    }
  };
  const validate = (values)=>{
    const errors = {};
    let titleLenght = titleInputRef.current.value.length;
    if(values.)
    return errors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit...");
    titleInputRef.current.value = "";
    useridInputRef.current.value = "";
    onAddTodo({ ...newTodo });
  };

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
            <small className="form-text text-muted">
              {formErrors.titleError}
            </small>
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
            <small className="form-text text-muted">
              {formErrors.userIdError}
            </small>
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
      <pre>{JSON.stringify(formErrors)}</pre>
    </div>
  );
}
