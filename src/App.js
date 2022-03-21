import "./App.css";
import { Todos } from "./todos/Todos";
import { store } from "./store";
import { Provider } from "react-redux";

setInterval(() => {
  //console.log(store.getState());
}, 1000);

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
