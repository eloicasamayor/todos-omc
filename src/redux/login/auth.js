import { users } from "../../data/users";
import { loginUser } from "./actions";
export function checkUser(username, password) {
  return new Promise((resolve, reject) => {
    let selectedUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (selectedUser !== undefined) {
      resolve(selectedUser);
    } else {
      reject("wrong username or password");
    }
  });
}
