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
    <>
      <h2>Filter todos</h2>
      <form onSubmit={onSearch}>
        <input
          type="text"
          ref={searchInputRef}
          onChange={onSearch}
          placeholder="search todos"
        />
        {filters.searchquery !== "" && (
          <>
            <button
              type="button"
              onClick={() => {
                searchInputRef.current.value = "";
                onSearch();
              }}
              title="clear search"
            >
              X
            </button>
            <label>
              <input
                type="checkbox"
                defaultChecked={filters.casesensitive}
                value="aA"
                title="case sensitive?"
                ref={caseSensitiveCheckbox}
                onChange={(e) => onCaseSensitiveChanged(e)}
              />
              aA
            </label>
          </>
        )}
        <label>
          <input
            type="checkbox"
            defaultChecked={filters.seeUncompleted}
            value="only uncompleted todos"
            ref={seeUncompletedTodosCheckbox}
            onChange={(e) => onSeeUncompletedChanged(e)}
          />
          See uncompleted todos
        </label>
        <label>
          <input
            type="checkbox"
            defaultChecked={filters.seeCompleted}
            value="only uncompleted todos"
            ref={seeCompletedTodosCheckbox}
            onChange={(e) => onSeeCompletedChanged(e)}
          />
          See completed todos
        </label>
      </form>
    </>
  );
}
