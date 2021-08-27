import { LEADERS } from "../../shared/leaders";
import { type } from "../type";

export const leaderReducer = (state = { leaders: LEADERS }, action) => {
  switch (action.type) {
    case type.SET_LEADERS:
      return {
        ...state,
        leaders: action.leaders,
      };
    default:
      return state;
  }
};
