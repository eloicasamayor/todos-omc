import { useRef, useState } from "react";
export function AfegirTodo({ onAddTodo }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const titleInputRef = useRef();
  const detailsInputRef = useRef();
  const checkTodoTitle = (e) => {
    setNewTodoTitle(e.target.value);
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
      >
        <input
          type="text"
          placeholder="New todo title"
          ref={titleInputRef}
          onChange={(e) => checkTodoTitle(e)}
        ></input>
        <textarea
          cols={50}
          rows={3}
          defaultValue="new todo details"
          ref={detailsInputRef}
        />
        {newTodoTitle !== "" && <input type="submit" value="add"></input>}
      </form>
    </>
  );
}
