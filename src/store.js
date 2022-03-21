import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reduceTodos } from "./todos/reducers";

const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(reducer, applyMiddleware(thunk));
