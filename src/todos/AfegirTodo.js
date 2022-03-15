import { useRef } from "react";
export function AfegirTodo({ onTodoAdded }) {
  const inputRef = useRef();
  const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
  function postNewTodo() {
    console.log(inputRef.current.value);
    return fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        title: inputRef.current.value,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postNewTodo().then((json) => onTodoAdded(json));

        inputRef.current.value = "";
      }}
    >
      <input type="text" ref={inputRef}></input>
      <input type="submit" value="afegir"></input>
    </form>
  );
}
