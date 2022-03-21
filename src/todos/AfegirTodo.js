import { useRef } from "react";
import { postNewTodo } from "./TodosApi";
export function AfegirTodo({ onTodoAdded }) {
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = inputRef.current.value;
        postNewTodo(title).then((json) => onTodoAdded(json));

        inputRef.current.value = "";
      }}
    >
      <input type="text" ref={inputRef}></input>
      <input type="submit" value="afegir"></input>
    </form>
  );
}
