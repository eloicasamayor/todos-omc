import { createStore, combineReducers } from "redux";
import { reduceTodos } from "./todos/reducers";

const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(reducer);
