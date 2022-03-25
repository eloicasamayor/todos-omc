import { CASE_SENSITIVE, SEARCH } from "./actions";
const initialState = { searchquery: "", casesensitive: false };
export function reduceFilters(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchquery: action.searchquery };
    case CASE_SENSITIVE:
      return { ...state, casesensitive: action.casesensitive };

    default:
      return state;
  }
}
