import { type } from "../type";

export const commentReducer = (
  state = { comments: [], errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.ADD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        errorMessage: null,
      };
    case type.POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        errorMessage: null,
      };
    case type.COMMENTS_FAILED:
      return {
        ...state,
        comments: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
