export function selectTodos(state) {
  if (state.filters.searchquery === "") {
    return state.todos;
  }
  if (state.filters.casesensitive) {
    return state.todos.filter((t) =>
      t.title.includes(state.filters.searchquery)
    );
  } else {
    return state.todos.filter((t) =>
      t.title.toLowerCase().includes(state.filters.searchquery.toLowerCase())
    );
  }
}
export function selectFilters(state) {
  return state.filters;
}
