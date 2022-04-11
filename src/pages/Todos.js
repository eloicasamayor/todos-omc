import { useEffect, useRef } from "react";
import { TodoList, AfegirTodo, Filters } from "../components";
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
  seeUncompletedFilter,
  seeCompletedFilter,
  filterByUser,
} from "../redux/filters/actions";
import { selectLoading } from "../redux/loading/selectors";

export function Todos() {
  const todos = useSelector(selectTodos);
  const filters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 600000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());
  const onAddTodo = (todo) => {
    dispatch(requestAddTodo(todo));
  };
  const onTodoUpdated = (updatedTodo) =>
    dispatch(requestUpdateTodo(updatedTodo));
  const onTodoDeleted = (todo) => dispatch(requestDeleteTodo(todo));
  const onFilterTodos = (query) => dispatch(searchQueryFilter(query));
  const onCaseSensitiveChanged = (e) => {
    dispatch(caseSensitiveSearchFilter(e.target.checked));
  };
  const onSeeUncompletedChanged = (e) => {
    dispatch(seeUncompletedFilter(e.target.checked));
  };
  const onSeeCompletedChanged = (e) => {
    dispatch(seeCompletedFilter(e.target.checked));
  };

  const onFilterByUserChanged = (e) => {
    dispatch(filterByUser(e.target.value));
    console.log("user changed", e.target.value);
  };

  const onSearch = (e) => {
    onFilterTodos(searchInputRef.current.value);
  };
  const searchInputRef = useRef();
  const selectUserRef = useRef();
  const caseSensitiveSearchChechbox = useRef();
  const seeUncompletedCheckbox = useRef();
  const seeCompletedCheckbox = useRef();
  return (
    <div className="p-1">
      <aside>
        <Filters
          filters={filters}
          onSearch={onSearch}
          searchInputRef={searchInputRef}
          selectUserRef={selectUserRef}
          caseSensitiveSearchChechbox={caseSensitiveSearchChechbox}
          onCaseSensitiveChanged={onCaseSensitiveChanged}
          seeUncompletedCheckbox={seeUncompletedCheckbox}
          onSeeUncompletedChanged={onSeeUncompletedChanged}
          seeCompletedCheckbox={seeCompletedCheckbox}
          onSeeCompletedChanged={onSeeCompletedChanged}
          onFilterByUserChanged={onFilterByUserChanged}
        />
        <AfegirTodo onAddTodo={onAddTodo} />
      </aside>
      <main>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <TodoList
            todos={todos}
            onTodoUpdated={onTodoUpdated}
            onTodoDeleted={onTodoDeleted}
            filters={filters}
          />
        )}
      </main>
    </div>
  );
}
