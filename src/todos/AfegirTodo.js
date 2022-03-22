import { useRef } from "react";
export function AfegirTodo({ onAddTodo }) {
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = inputRef.current.value;
        inputRef.current.value = "";
        //postNewTodo(title).then((json) => onTodoAdded(json));
        onAddTodo({ title });
      }}
    >
      <input type="text" ref={inputRef}></input>
      <input type="submit" value="afegir"></input>
    </form>
  );
}
