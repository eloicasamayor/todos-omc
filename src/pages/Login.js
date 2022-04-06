export function Login() {
  return (
    <div className="Card mx-auto w-50">
      <h1>Login</h1>
      <form>
        <div class="form-outline mb-4">
          <input type="text" id="inputUser" class="form-control" />
          <label class="form-label" for="inputUser">
            User
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="inputPassword" class="form-control" />
          <label class="form-label" for="inputPassword">
            Password
          </label>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
}
