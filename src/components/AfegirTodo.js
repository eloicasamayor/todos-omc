import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const initialValues = { title: "", userId: "", completed: "" };
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodo, setNewTodo] = useState(initialValues);
  const titleInputRef = useRef();
  const detailsInputRef = useRef();
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
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
          const details = detailsInputRef.current.value;
          titleInputRef.current.value = "";
          detailsInputRef.current.value = "";
          //postNewTodo(title).then((json) => onTodoAdded(json));
          onAddTodo({ title, details });
          setNewTodoTitle((t) => "");
        }}
        id="new-todo-form"
      >
        <input
          name="title"
          type="text"
          placeholder="New todo title"
          ref={titleInputRef}
          onChange={(e) => handleChange(e)}
        ></input>
        {/* <textarea
          cols={50}
          rows={3}
          defaultValue="new todo details"
          ref={detailsInputRef}
        /> */}
        <input
          name="userId"
          type="number"
          ref={detailsInputRef}
          onChange={(e) => handleChange(e)}
        ></input>
        <label>Create todo as:</label>
        <select
          name="completed"
          id="completed"
          onChange={(e) => handleChange(e)}
        >
          <option value="true">Completed</option>
          <option value="false">Not completed</option>
        </select>
        {newTodoTitle !== "" && <input type="submit" value="add"></input>}
      </form>
    </>
  );
}
