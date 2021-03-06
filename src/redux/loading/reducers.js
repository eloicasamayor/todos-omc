import { SET_LOADING } from "./actions";

export function reduceLoading(state = false, action) {
  switch (action.type) {
    case SET_LOADING: {
      return action.loading;
    }

    default:
      return state;
  }
}
