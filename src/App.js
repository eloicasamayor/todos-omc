import "./App.css";
import { Todos, Layout, NoPage, Edit, Login } from "./pages";
import { requestTodos } from "./redux/todos";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

store.dispatch(requestTodos());

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todos />} />
            <Route path="/edit/:todoId" element={<Edit />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
