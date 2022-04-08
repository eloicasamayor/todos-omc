import { LOGIN_USER } from "./actions";

export function reduceLogin(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return action.user;
    }

    default:
      return state;
  }
}
