import { type } from "../type";

export const leaderReducer = (
  state = { leaders: [], isLoading: true, errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.ADD_LEADERS:
      return {
        ...state,
        leaders: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case type.LEADERS_LOADING:
      return {
        ...state,
        leaders: [],
        errorMessage: null,
        isLoading: true,
      };
    case type.LEADERS_FAILED:
      return {
        ...state,
        leaders: [],
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
