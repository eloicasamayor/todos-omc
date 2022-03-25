import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const inputRef = useRef();
  const checkTodoTitle = (e) => {
    setNewTodoTitle(e.target.value);
  };
  return (
    <>
      <h2>Add a todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = inputRef.current.value;
          inputRef.current.value = "";
          //postNewTodo(title).then((json) => onTodoAdded(json));
          onAddTodo({ title });
          setNewTodoTitle((t) => "");
        }}
      >
        <input
          type="text"
          placeholder="New todo title"
          ref={inputRef}
          onChange={(e) => checkTodoTitle(e)}
        ></input>
        {newTodoTitle !== "" && <input type="submit" value="add"></input>}
      </form>
    </>
  );
}
