import { act } from "react-dom/test-utils";
import {
  REPLACE_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FILTER_TODOS,
} from "./actions";
export const initialState = [];

export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODOS: {
      return action.todos;
    }

    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO: {
      return state.map((currentTodo) =>
        currentTodo.id === action.todo.id ? action.todo : currentTodo
      );
    }
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.todo.id);

    //aixo aniria a un reducer a part reduceFilTER
    // i també, les best practices seria fer unes accions a part també
    //i combineReducers dels de reduceTodos i reduceFilter.
    case FILTER_TODOS:
      console.log("state===", state);
      console.log("action ====== ", action);
      return { ...state, searchquery: action.searchquery };

    default:
      return state;
  }
}
