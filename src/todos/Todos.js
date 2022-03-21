import { AfegirTodo } from "./AfegirTodo";
import { useEffect, useReducer } from "react";
import { getTodos } from "./TodosApi";
import { TodoList } from "./TodoList";
import { initialState, reduceTodos } from "./reducers";
import { replaceTodos, updateTodo, addTodo } from "./actions";

export function Todos() {
  const [todos, dispatch] = useReducer(reduceTodos, initialState);
  useEffect(() => {
    loadTodos();
    const intervalID = setInterval(() => loadTodos(), 60000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => getTodos().then((all) => dispatch(replaceTodos(all)));
  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (updatedTodo) => dispatch(updateTodo(updatedTodo));

  return (
    <div className="App">
      <h1>Llista de todos</h1>
      <button onClick={loadTodos}>Refresh</button>
      <TodoList todos={todos} onUpdated={onTodoUpdated} />
      <AfegirTodo onTodoAdded={onTodoAdded} />
    </div>
  );
}
