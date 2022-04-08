import { users } from "../../data/users";
export function checkUser(username, password) {
  return new Promise((resolve, reject) => {
    let selectedUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (selectedUser !== undefined) {
      resolve("loged in!");
    } else {
      reject("wrong username or password");
    }
  });
}
