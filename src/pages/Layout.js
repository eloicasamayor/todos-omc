import { Outlet } from "react-router-dom";
import { selectLogin } from "../redux/login/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Layout() {
  const current_user = useSelector(selectLogin);
  return (
    <div className="h-100">
      <header>
        <h1>Todo list</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo list</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        {current_user.username != null ? (
          <p>{current_user.username}</p>
        ) : (
          <p>Not loged in</p>
        )}
      </header>

      <Outlet />
      <footer className="footer mt-auto py-3 bg-light">
        <p>Developed by Eloi Casamayor Esteve</p>
      </footer>
    </div>
  );
}
