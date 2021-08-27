import { type } from "../type";

export const set_comments = (comments) => (dispatch) => {
  dispatch({
    type: type.SET_COMMENTS,
    comments,
  });
};
