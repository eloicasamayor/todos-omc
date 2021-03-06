import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reduceFilters } from "./filters/reducers";
import { reduceTodos, todosMiddleware } from "./todos";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduceLogin } from "./login/reducers";
import { reduceLoading } from "./loading/reducers";
const reducer = combineReducers({
  loading: reduceLoading,
  todos: reduceTodos,
  filters: reduceFilters,
  login: reduceLogin,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(todosMiddleware))
);
