import { LOGIN_USER } from "./actions";
import { users } from "../../data/users";
const initialState = {
  _id: null,
  username: null,
  password: null,
};
export function reduceLogin(state = {}, action) {
  const inputUser = action.user;
  let selectedUser = {};
  switch (action.type) {
    case LOGIN_USER: {
      return action.user;
    }

    default:
      return state;
  }
}
