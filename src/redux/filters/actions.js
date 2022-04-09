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

export const SEE_UNCOMPLETED = "filters/SEE_UNCOMPLETED";
export function seeUncompletedFilter(seeUncompleted) {
  return {
    type: SEE_UNCOMPLETED,
    seeUncompleted: seeUncompleted,
  };
}

export const SEE_COMPLETED = "filters/SEE_COMPLETED";
export function seeCompletedFilter(seeCompleted) {
  return {
    type: SEE_COMPLETED,
    seeCompleted: seeCompleted,
  };
}

export const FILTER_BY_USER = "filters/FILTER_BY_USER";
export function filterByUser(userId) {
  return {
    type: FILTER_BY_USER,
    userId: userId,
  };
}
