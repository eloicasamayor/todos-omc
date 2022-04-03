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
    <>
      <h2>Add a todo</h2>
      <pre>{JSON.stringify(newTodo)}</pre>
      <form onSubmit={(e) => handleSubmit(e)} id="new-todo-form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            placeholder="New todo title"
            ref={titleInputRef}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="userId">user Id</label>
          <input
            name="userId"
            type="number"
            ref={useridInputRef}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="completed">Completed?</label>
          <select
            ref={completedSelectRef}
            name="completed"
            id="completed"
            defaultValue={false}
            onChange={(e) => handleChange(e)}
          >
            <option value={true}>Completed</option>
            <option value={false}>Not completed</option>
          </select>
        </div>
        {todoValidationResult && <input type="submit" value="add"></input>}
      </form>
    </>
  );
}
