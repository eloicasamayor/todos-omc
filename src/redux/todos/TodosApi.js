const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
  //.then((json) => setLlistaTodos(json));
}

export function postNewTodo(todo) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export function postUpdateTodo(todo) {
  return fetch(ENDPOINT + "/" + todo.id, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export function deleteDeleteTodo(todo) {
  return fetch(ENDPOINT + "/" + todo.id, {
    method: "DELETE",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}
