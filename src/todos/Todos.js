import { AfegirTodo } from "./AfegirTodo";
import { useEffect } from "react";
import { TodoList } from "./TodoList";
import {
  requestUpdateTodo,
  requestAddTodo,
  requestTodos,
  deleteTodo,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./selectots";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 60000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());
  const onAddTodo = (todo) => dispatch(requestAddTodo(todo));
  const onTodoUpdated = (updatedTodo) =>
    dispatch(requestUpdateTodo(updatedTodo));
  const onTodoDeleted = (todo) => dispatch(deleteTodo(todo));

  return (
    <div className="App">
      <h1>Llista de todos</h1>
      <button onClick={loadTodos}>Refresh</button>
      <TodoList
        todos={todos}
        onTodoUpdated={onTodoUpdated}
        onTodoDeleted={onTodoDeleted}
      />
      <AfegirTodo onAddTodo={onAddTodo} />
    </div>
  );
}
