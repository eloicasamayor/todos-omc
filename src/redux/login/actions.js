export const LOGIN_USER = "login/LOGIN_USER";
export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user: user,
  };
}
