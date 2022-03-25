import { CASE_SENSITIVE, SEARCH, ONLY_UNCOMPLETED } from "./actions";
const initialState = { searchquery: "", casesensitive: false };
export function reduceFilters(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchquery: action.searchquery };
    case CASE_SENSITIVE:
      return { ...state, casesensitive: action.casesensitive };
    case ONLY_UNCOMPLETED:
      return { ...state, onlyUncompleted: action.onlyUncompleted };

    default:
      return state;
  }
}
