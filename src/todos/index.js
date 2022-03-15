import { AfegirTodo } from "./AfegirTodo";
import { TodoItem } from "./TodoItem";
import { useState, useEffect } from "react";
export function getTodos() {
  return fetch("https://tc-todo-2022.herokuapp.com/todos").then((response) =>
    response.json()
  );
  //.then((json) => setLlistaTodos(json));
}

export function TodoList({ llistaTodos, onUpdated }) {
  return (
    <ul>
      {llistaTodos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onUpdated={onUpdated} />
      ))}
    </ul>
  );
}

export function Todos() {
  const [llistaTodos, setLlistaTodos] = useState([]);
  useEffect(() => {
    getTodos()
      //.then((json) => setLlistaTodos(json));
      .then(setLlistaTodos);
    const intervalID = setInterval(() => {
      getTodos().then(setLlistaTodos);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="App">
      <h1>Llista de todos</h1>
      <button onClick={() => getTodos().then(setLlistaTodos)}>Refresh</button>
      <TodoList
        llistaTodos={llistaTodos}
        onUpdated={(updatedTodo) =>
          setLlistaTodos(
            llistaTodos.map((currentTodo) =>
              currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo
            )
          )
        }
      />
      <AfegirTodo
        onTodoAdded={(todo) => setLlistaTodos([...llistaTodos, todo])}
      />
    </div>
  );
}
