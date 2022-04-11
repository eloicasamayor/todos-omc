import {
  replaceTodos,
  REQUEST_TODOS,
  REQUEST_ADD_TODO,
  REQUEST_UPDATE_TODO,
  REQUEST_DELETE_TODO,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./actions";
import {
  getTodos,
  postNewTodo,
  postUpdateTodo,
  deleteDeleteTodo,
} from "./TodosApi";
import { setLoading } from "../loading/actions";
export const todosMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_TODOS) {
    store.dispatch(setLoading(true));
    const todos = await getTodos();
    store.dispatch(replaceTodos(todos));
    store.dispatch(setLoading(false));
  }
  if (action.type === REQUEST_ADD_TODO) {
    const todo = await postNewTodo(action.todo);
    store.dispatch(addTodo(todo));
  }
  if (action.type === REQUEST_UPDATE_TODO) {
    const todo = await postUpdateTodo(action.todo);
    store.dispatch(updateTodo(todo));
  }
  if (action.type === REQUEST_DELETE_TODO) {
    const todo = await deleteDeleteTodo(action.todo);
    store.dispatch(deleteTodo(todo));
  }
};
