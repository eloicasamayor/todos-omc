import { Outlet } from "react-router-dom";
import { selectLogin } from "../redux/login/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Layout() {
  const current_user = useSelector(selectLogin);
  return (
    <>
      <header>
        <nav className="pl-3 navbar navbar-expand-lg navbar-light bg-light">
          <a
            style={{ paddingLeft: "1rem" }}
            href="#"
            className="navbar-brand mr-3"
          >
            Todo list
          </a>

          <div className="">
            <ul className="navbar-nav mr-auto d-flex align-items-center flex-row">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Todo list
                </Link>
              </li>
              <li className="nav-item mx-3">
                {current_user.username != null ? (
                  <Link to="/login" className="nav-link">
                    logged as <b>{current_user.username}</b>
                  </Link>
                ) : (
                  <Link to="/login" className="nav-link">
                    Log in
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Outlet />
      <footer className="footer mt-auto py-3 bg-light">
        <p className="text-center">
          Developed by{" "}
          <Link to="https://eloicasamayor.github.io/portfolio/">
            Eloi Casamayor Esteve
          </Link>
        </p>
      </footer>
    </>
  );
}
