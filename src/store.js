import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reduceTodos, todosMiddleware } from "./redux";

const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(todosMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
