import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/login/actions";
import { useRef, useState } from "react";
import { selectLogin } from "../redux/login/selectors";
import { users } from "../data/users";
import { useNavigate } from "react-router-dom";
export function Login() {
  const dispatch = useDispatch();
  const userInput = useRef();
  const passwordInput = useRef();
  const [errorMessageOn, setErrorMessageOn] = useState(false);
  const current_user = useSelector(selectLogin);
  let navigate = useNavigate();
  function checkUser(username, password) {
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
  const onLoginUser = (username, password) => {
    checkUser(username, password)
      .then((m) => {
        console.log("log message" + m);
        dispatch(loginUser({ username: username, password: password }));
        navigate("/");
      })
      .catch((m) => {
        console.log("error message: +m");
        dispatch(loginUser({}));
        showErrorMessage();
      });
  };

  async function showErrorMessage() {
    setErrorMessageOn((e) => true);
    await delay(3000);
    setErrorMessageOn((e) => false);
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

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
            onLoginUser(userInput.current.value, passwordInput.current.value);
          }}
        >
          Sign in
        </button>
      </form>

      {errorMessageOn && (
        <div className="card bg-danger p-3">
          <p className="text-center font-weight-bold">
            Wrong username or password! :(
          </p>
        </div>
      )}
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
