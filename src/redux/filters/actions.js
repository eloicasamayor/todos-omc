export const SEARCH = "filters/SEARCH";
export function searchQueryFilter(searchquery) {
  return {
    type: SEARCH,
    searchquery: searchquery,
  };
}
export const CASE_SENSITIVE = "filters/CASE_SENSITIVE";
export function caseSensitiveSearchFilter(casesensitive) {
  return {
    type: CASE_SENSITIVE,
    casesensitive: casesensitive,
  };
}

export const ONLY_UNCOMPLETED = "filters/ONLY_UNCOMPLETED";
export function onlyUncompletedFilter(onlyUncompleted) {
  return {
    type: ONLY_UNCOMPLETED,
    onlyUncompleted: onlyUncompleted,
  };
}
