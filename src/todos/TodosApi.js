const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function getTodos() {
  return fetch("https://tc-todo-2022.herokuapp.com/todos").then((response) =>
    response.json()
  );
  //.then((json) => setLlistaTodos(json));
}

export function postNewTodo(title) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}

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
