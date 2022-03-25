import { AfegirTodo } from "./AfegirTodo";
import { useState, useEffect, useRef } from "react";
import { TodoList } from "./TodoList";
import {
  requestUpdateTodo,
  requestAddTodo,
  requestTodos,
  requestDeleteTodo,
  selectTodos,
  selectFilters,
} from "../redux/todos";
import { useDispatch, useSelector } from "react-redux";
import {
  caseSensitiveSearchFilter,
  searchQueryFilter,
} from "../redux/filters/actions";
import { Filters } from "./Filters";

export function Todos() {
  const todos = useSelector(selectTodos);
  const filters = useSelector(selectFilters);

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
  const onFilterTodos = (query) => dispatch(searchQueryFilter(query));
  const onCaseSensitiveChanged = (e) => {
    dispatch(caseSensitiveSearchFilter(e.target.checked));
  };

  const onSearch = (e) => {
    e.preventDefault();
    onFilterTodos(inputRef.current.value);
    setSearching(() => inputRef.current.value !== "");
  };
  const inputRef = useRef();
  const caseSensitiveSearchChechbox = useRef();
  const [searching, setSearching] = useState(false);
  return (
    <div className="App">
      <button onClick={loadTodos}>Refresh</button>
      <Filters
        onSearch={onSearch}
        inputRef={inputRef}
        searching={searching}
        caseSensitiveSearchChechbox={caseSensitiveSearchChechbox}
        onCaseSensitiveChanged={onCaseSensitiveChanged}
        defaultCaseSensitiveChecked={filters.casesensitive}
      />
      {searching ? <h1>Search results:</h1> : <h1>Todo list</h1>}
      <TodoList
        todos={todos}
        onTodoUpdated={onTodoUpdated}
        onTodoDeleted={onTodoDeleted}
      />
      <AfegirTodo onAddTodo={onAddTodo} />
    </div>
  );
}
