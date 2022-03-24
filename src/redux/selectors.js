export function selectTodos(state) {
  console.log(state.todos);
  return state.todos;
}

/*   console.log("state =", state);
  if (state.searchquery === "") {
    console.log("selectng all todos...");
    
  }
  console.log("selectng filtered todos...");
  console.log("searchquery", state.searchquery);
  return state.todos.filter((t) => t.title.includes(state.searchquery));
} */
