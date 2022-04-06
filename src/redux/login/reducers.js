import { LOGIN_USER } from "./actions";
import { users } from "../../data/users";
const initialState = {
  _id: null,
  username: null,
  password: null,
};
export function reduceLogin(state = initialState, action) {
  const inputUser = action.user;
  let selectedUser = {};
  switch (action.type) {
    case LOGIN_USER: {
      console.log("inputUser", inputUser);
      selectedUser = users.find(
        (u) =>
          u.username === inputUser.username && u.password === inputUser.password
      );
      console.log("selectedUser", selectedUser);
      if (!selectedUser) {
        selectedUser = {};
      }
      return { ...selectedUser };
    }

    default:
      return state;
  }
}
