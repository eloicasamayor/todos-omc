import { useDispatch, useSelector } from "react-redux";
import { requestLoginUser } from "../redux/login/actions";
import { useRef } from "react";
import { selectLogin } from "../redux/login/selectors";
export function Login() {
  const dispatch = useDispatch();
  const current_user = useSelector(selectLogin);
  const onLoginUser = (user) => dispatch(requestLoginUser(user));
  const userInput = useRef();
  const passwordInput = useRef();
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return isEmpty(current_user) ? (
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

      <div className="toast" role="alert">
        Wrong username or password :(
      </div>
    </div>
  ) : (
    <div className="Card mx-auto w-50">
      <h2>Logged as </h2>
      <p>
        <b>username:</b> {current_user.username}
      </p>
      <p>
        <b>user id:</b> {current_user._id}
      </p>
      <p>
        <b>password:</b> {current_user.password}
      </p>
      <div style={{ height: "50px" }} className=" w-100"></div>
      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={() => {
          onLoginUser({
            username: "",
            password: "",
          });
        }}
      >
        Log out
      </button>
    </div>
  );
}
