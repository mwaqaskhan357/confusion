import { COMMENTS } from "../../shared/comments";
import { type } from "../type";

export const commentReducer = (state = { comments: COMMENTS }, action) => {
  switch (action.type) {
    case type.SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return state;
  }
};
