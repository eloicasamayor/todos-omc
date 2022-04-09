import {
  CASE_SENSITIVE,
  SEARCH,
  SEE_UNCOMPLETED,
  SEE_COMPLETED,
  FILTER_BY_USER,
} from "./actions";
const initialState = {
  searchquery: "",
  casesensitive: false,
  seeUncompleted: true,
  seeCompleted: true,
  user: "",
};
export function reduceFilters(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      console.log("searching nanana");
      return { ...state, searchquery: action.searchquery };
    }
    case CASE_SENSITIVE:
      return { ...state, casesensitive: action.casesensitive };
    case SEE_UNCOMPLETED:
      return { ...state, seeUncompleted: action.seeUncompleted };
    case SEE_COMPLETED:
      return { ...state, seeCompleted: action.seeCompleted };
    case FILTER_BY_USER:
      return { ...state, user: action.userId };

    default:
      return state;
  }
}
