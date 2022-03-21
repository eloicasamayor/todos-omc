import { AfegirTodo } from "./AfegirTodo";
import { useEffect } from "react";
import { getTodos } from "./TodosApi";
import { TodoList } from "./TodoList";
import { replaceTodos, updateTodo, addTodo, requestTodos } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function selectTodos(state) {
  return state.todos;
}

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());
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
