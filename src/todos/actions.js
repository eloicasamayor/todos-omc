import { getTodos } from "./TodosApi";

export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return async (dispatch) => {
    const todos = await getTodos();
    dispatch(replaceTodos(todos));
  };
}

export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(todos = []) {
  return { type: REPLACE_TODOS, todos: todos };
}

export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todos) {
  return { type: ADD_TODO, todo: todos };
}

export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}
