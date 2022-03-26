export function selectTodos(state) {
  let todos = [];
  if (state.filters.searchquery === "") {
    todos = state.todos;
  } else {
    if (state.filters.casesensitive) {
      todos = state.todos.filter(
        (t) =>
          t.title.includes(state.filters.searchquery) ||
          t.details.includes(state.filters.searchquery)
      );
    } else {
      todos = state.todos.filter(
        (t) =>
          t.title
            .toLowerCase()
            .includes(state.filters.searchquery.toLowerCase()) ||
          t.details
            .toLowerCase()
            .includes(state.filters.searchquery.toLowerCase())
      );
    }
  }
  if (state.filters.onlyUncompleted) {
    todos = todos.filter((t) => t.completed === false);
  }
  return todos;
}
export function selectFilters(state) {
  return state.filters;
}
