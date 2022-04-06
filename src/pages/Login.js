import { useDispatch } from "react-redux";
import { loginUser } from "../redux/login/actions";
import { useRef } from "react";
export function Login() {
  const dispatch = useDispatch();
  const onLoginUser = (user) => dispatch(loginUser(user));
  const userInput = useRef();
  const passwordInput = useRef();
  return (
    <div className="Card mx-auto w-50">
      <h1>Login</h1>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="inputUser"
            className="form-control"
            ref={userInput}
          />
          <label className="form-label" htmlFor="inputUser">
            User
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            ref={passwordInput}
          />
          <label className="form-label" htmlFor="inputPassword">
            Password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={() => {
            onLoginUser({
              username: userInput.current.value,
              password: passwordInput.current.value,
            });
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
