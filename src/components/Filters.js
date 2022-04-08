export function Filters({
  onSearch,
  searchInputRef,
  filters,
  caseSensitiveCheckbox,
  onCaseSensitiveChanged,
  seeUncompletedTodosCheckbox,
  onSeeUncompletedChanged,
  seeCompletedTodosCheckbox,
  onSeeCompletedChanged,
}) {
  return (
    <div className="card card-body">
      <h2>Filter todos</h2>
      <form onSubmit={onSearch}>
        <div className="d-flex" style={{ gap: "6px" }}>
          <input
            className="form-control"
            type="text"
            ref={searchInputRef}
            onChange={onSearch}
            placeholder="search todos"
          />
          {filters.searchquery !== "" && (
            <>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  searchInputRef.current.value = "";
                  onSearch();
                }}
                title="clear search"
              >
                X
              </button>

              <input
                id="case-sensitive-checkbox"
                type="checkbox"
                className="btn-check"
                defaultChecked={filters.casesensitive}
                value="aA"
                title="case sensitive"
                ref={caseSensitiveCheckbox}
                onChange={(e) => onCaseSensitiveChanged(e)}
              />
              <label
                htmlFor="case-sensitive-checkbox"
                className="btn btn-outline-primary"
                title="case sensitive"
              >
                aA
              </label>
            </>
          )}
        </div>
        <div
          className="mt-2 d-flex justify-content-center"
          style={{ gap: "8px" }}
        >
          <input
            type="checkbox"
            id="see-uncompleted-todos"
            className="btn-check"
            defaultChecked={filters.seeUncompleted}
            value="see uncompleted todos"
            ref={seeUncompletedTodosCheckbox}
            onChange={(e) => onSeeUncompletedChanged(e)}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="see-uncompleted-todos"
          >
            See uncompleted todos
          </label>

          <input
            id="see-completed-todos"
            type="checkbox"
            className="btn-check"
            defaultChecked={filters.seeCompleted}
            value="uncompleted todos"
            ref={seeCompletedTodosCheckbox}
            onChange={(e) => onSeeCompletedChanged(e)}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor="see-completed-todos"
          >
            See completed todos
          </label>
        </div>
      </form>
    </div>
  );
}
