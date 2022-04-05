import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <h1>Todo list</h1>
      <Outlet />
    </div>
  );
}
