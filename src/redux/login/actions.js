export const LOGIN_USER = "login/LOGIN_USER";
export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user: user,
  };
}

export const REQUEST_LOGIN_USER = "login/REQUEST_LOGIN_USER";
export function requestLoginUser(user) {
  return {
    type: REQUEST_LOGIN_USER,
    user: user,
  };
}
