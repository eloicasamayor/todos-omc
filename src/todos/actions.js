export const REPLACE_TODOS = "REPLACE_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TODO = "ADD_TODO";

export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}
export function addTodo(todos) {
  return { type: ADD_TODO, todo: todos };
}
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos: todos };
}
