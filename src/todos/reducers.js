export const initialState = [];
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const REPLACE_TODOS = "REPLACE_TODOS";

export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODOS:
      return action.todos;
    default:
      return state;
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO: {
      return state.map((currentTodo) =>
        currentTodo.id === action.todo.id ? action.todo : currentTodo
      );
    }
  }
}
