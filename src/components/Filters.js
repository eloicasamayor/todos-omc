export function Filters({
  onSearch,
  searchInputRef,
  selectUserRef,
  filters,
  caseSensitiveCheckbox,
  onCaseSensitiveChanged,
  seeUncompletedTodosCheckbox,
  onSeeUncompletedChanged,
  seeCompletedTodosCheckbox,
  onSeeCompletedChanged,
  onFilterByUserChanged,
}) {
  return (
    <div className="card card-body   m-2">
      <h2>Filter todos by</h2>
      <form onSubmit={onSearch} className="filters-wrapper">
        <div className="d-flex  flex-column" style={{ gap: "2px", flex: "1" }}>
          title
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
                className="btn btn-secondary"
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
                className="btn btn-outline-secondary"
                title="case sensitive"
              >
                aA
              </label>
            </>
          )}
        </div>
        <div className="d-flex  flex-column" style={{ gap: "2px", flex: "1" }}>
          state
          <div className="btn-group">
            <input
              type="checkbox"
              id="see-uncompleted-todos"
              className="btn-check"
              defaultChecked={filters.seeUncompleted}
              value="uncompleted todos"
              ref={seeUncompletedTodosCheckbox}
              onChange={(e) => onSeeUncompletedChanged(e)}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor="see-uncompleted-todos"
            >
              uncompleted
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
              className="btn btn-outline-secondary"
              htmlFor="see-completed-todos"
            >
              completed
            </label>
          </div>
        </div>
        <div className=" d-flex flex-column" style={{ gap: "2px", flex: "1" }}>
          <label htmlFor="completed">user</label>
          <select
            ref={selectUserRef}
            className="form-control"
            name="completed"
            id="completed"
            defaultValue={false}
            onChange={(e) => {
              onFilterByUserChanged(e);
            }}
            required
          >
            <option value="">All users</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </form>
    </div>
  );
}
