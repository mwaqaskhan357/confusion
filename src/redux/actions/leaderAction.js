import { type } from "../type";

export const set_leaders = (leaders) => (dispatch) => {
  dispatch({
    type: type.SET_LEADERS,
    leaders,
  });
};
