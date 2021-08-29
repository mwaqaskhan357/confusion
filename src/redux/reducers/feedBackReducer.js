import { type } from "../type";

export const feedBackReducer = (
  state = { feedbacks: [], errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.POST_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
        errorMessage: null,
      };
    case type.FEEDBACK_ERROR:
      return {
        ...state,
        feedbacks: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
