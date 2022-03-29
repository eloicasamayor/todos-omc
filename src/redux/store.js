import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reduceFilters } from "./filters/reducers";
import { reduceTodos, todosMiddleware } from "./todos";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ todos: reduceTodos, filters: reduceFilters });

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(todosMiddleware))
);
