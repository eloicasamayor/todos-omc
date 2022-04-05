import "./App.css";
import { Todos } from "./pages";
import { requestTodos } from "./redux/todos";
import { store } from "./redux/store";
import { Provider } from "react-redux";

store.dispatch(requestTodos());

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
