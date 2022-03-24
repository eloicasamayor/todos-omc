import { AfegirTodo } from "./AfegirTodo";
import { useState, useEffect, useRef } from "react";
import { TodoList } from "./TodoList";
import {
  requestUpdateTodo,
  requestAddTodo,
  requestTodos,
  requestDeleteTodo,
  filterTodos,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../redux/selectors";

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
  const onTodoDeleted = (todo) => dispatch(requestDeleteTodo(todo));
  const onFilterTodos = (query) => dispatch(filterTodos(query));
  const onSearch = (e) => {
    e.preventDefault();
    onFilterTodos(inputRef.current.value);
    setSearching(() => inputRef.current.value !== "");
    console.log("searching " + inputRef.current.value);
  };
  const inputRef = useRef();
  const [searching, setSearching] = useState(false);

  return (
    <div className="App">
      <button onClick={loadTodos}>Refresh</button>
      <form onSubmit={onSearch}>
        <input
          type="text"
          ref={inputRef}
          onChange={onSearch}
          placeholder="search todos"
        />
        {searching && (
          <button onClick={() => (inputRef.current.value = "")}>clear</button>
        )}
      </form>
      {searching ? <h1>Search results:</h1> : <h1>Llista de todos</h1>}
      <TodoList
        todos={todos}
        onTodoUpdated={onTodoUpdated}
        onTodoDeleted={onTodoDeleted}
      />
      <AfegirTodo onAddTodo={onAddTodo} />
    </div>
  );
}
