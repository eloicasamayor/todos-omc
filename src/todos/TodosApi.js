import { ENDPOINT } from "./TodoItem";

export function postUpdateTodo(todo) {
  return fetch(ENDPOINT + "/" + todo.id, {
    method: "POST",
    body: JSON.stringify({
      completed: !todo.completed,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}
