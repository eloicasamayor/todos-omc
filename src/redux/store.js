import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reduceFilters } from "./filters/reducers";
import { reduceTodos, todosMiddleware } from "./todos";

const reducer = combineReducers({ todos: reduceTodos, filters: reduceFilters });

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(todosMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
