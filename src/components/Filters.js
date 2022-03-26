export function Filters({
  onSearch,
  searchInputRef,
  searching,
  caseSensitiveCheckbox,
  onCaseSensitiveChanged,
  defaultCaseSensitiveChecked,
  onlyUncompletedTodos,
  onOnlyUncompletedChanged,
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
        {searching && (
          <>
            <button
              onClick={() => (searchInputRef.current.value = "")}
              title="clear search"
            >
              X
            </button>
            <label>
              <input
                type="checkbox"
                defaultChecked={defaultCaseSensitiveChecked}
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
            value="only uncompleted todos"
            ref={onlyUncompletedTodos}
            onChange={(e) => onOnlyUncompletedChanged(e)}
          />
          Only uncompleted todos
        </label>
      </form>
    </>
  );
}
