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
        <div className="" style={{ gap: "2px", flex: "1" }}>
          <div className="d-flex">
            <span className="mr-auto p-2" style={{ flex: "1", height: "28px" }}>
              title
            </span>
            {filters.searchquery !== "" && (
              <div style={{ position: "relative" }}>
                <button
                  className="btn btn-secondary btn-sm h-1"
                  style={{
                    height: "30px",
                    position: "absolute",
                    bottom: "-34px",
                    left: "-80px",
                  }}
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
                  style={{
                    height: "30px",
                  }}
                  type="checkbox"
                  className="btn-check btn-sm"
                  defaultChecked={filters.casesensitive}
                  value="aA"
                  title="case sensitive"
                  ref={caseSensitiveCheckbox}
                  onChange={(e) => onCaseSensitiveChanged(e)}
                />
                <label
                  style={{
                    height: "30px",
                    position: "absolute",
                    bottom: "-34px",
                    left: "-50px",
                  }}
                  htmlFor="case-sensitive-checkbox"
                  className="btn btn-outline-secondary"
                  title="case sensitive"
                >
                  aA
                </label>
              </div>
            )}
          </div>
          <input
            className="form-control"
            type="text"
            ref={searchInputRef}
            onChange={onSearch}
            placeholder="search todos"
          />
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
