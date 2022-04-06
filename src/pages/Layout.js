import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>
        <h1>Todo list</h1>
      </header>

      <Outlet />
      <footer className="footer mt-auto py-3 bg-light">
        <p>Developed by Eloi Casamayor Esteve</p>
      </footer>
    </div>
  );
}
