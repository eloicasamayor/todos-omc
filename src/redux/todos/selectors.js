import { isEmpty } from "../../pages/Login";
export function selectTodos(state) {
  let todos = state.todos;

  todos = filterTodosBySearch(state, todos);
  todos = filterTodosByState(state, todos);
  todos = filterTodosByUserId(state, todos);

  return todos;
}

function filterTodosBySearch(state, todos) {
  if (state.filters.searchquery === "") {
    todos = state.todos;
  } else {
    if (state.filters.casesensitive) {
      todos = state.todos.filter((t) =>
        t.title.includes(state.filters.searchquery)
      );
    } else {
      todos = state.todos.filter((t) =>
        t.title.toLowerCase().includes(state.filters.searchquery.toLowerCase())
      );
    }
  }
  return todos;
}

function filterTodosByState(state, todos) {
  if (!state.filters.seeUncompleted) {
    todos = todos.filter((t) => t.completed === true);
  }
  if (!state.filters.seeCompleted) {
    todos = todos.filter((t) => t.completed === false);
  }
  return todos;
}

function filterTodosByUserId(state, todos) {
  if (state.filters.user === "") {
    return todos;
  }
  todos = todos.filter((t) => t.userid === parseInt(state.filters.user));
  return todos;
}

export function selectFilters(state) {
  return state.filters;
}
