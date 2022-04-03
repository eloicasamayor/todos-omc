import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const initialValues = { title: "", userId: "", completed: false };
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodo, setNewTodo] = useState(initialValues);
  const titleInputRef = useRef();
  const useridInputRef = useRef();
  const completedSelectRef = useRef();
  const handleChange = () => {
    setNewTodo(
      /* { ...newTodo, [name]: value } */

      {
        title: titleInputRef.current.value,
        userid: parseInt(useridInputRef.current.value),
        completed: completedSelectRef.current.value === "true",
      }
    );
    // form validation here
    setNewTodoTitle("111");
  };
  return (
    <>
      <h2>Add a todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = titleInputRef.current.value;
          const userid = useridInputRef.current.value;
          titleInputRef.current.value = "";
          useridInputRef.current.value = "";
          //postNewTodo(title).then((json) => onTodoAdded(json));
          onAddTodo({ ...newTodo });
          setNewTodoTitle((t) => "");
        }}
        id="new-todo-form"
      >
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
        {newTodoTitle !== "" && <input type="submit" value="add"></input>}
      </form>
    </>
  );
}
