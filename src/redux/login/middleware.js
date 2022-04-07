import { loginUser, REQUEST_LOGIN_USER } from "./actions";
import { users } from "../../data/users";
const checkUser = (inputUser) => {
  console.log("checking user......");
  return users.find(
    (u) =>
      u.username === inputUser.username && u.password === inputUser.password
  );
};

export const loginMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_LOGIN_USER) {
    let logedUser = {};
    logedUser = await checkUser(action.user);
    if (logedUser == undefined) {
      logedUser = {};
    } else {
    }
    store.dispatch(loginUser(logedUser));
  }
};
