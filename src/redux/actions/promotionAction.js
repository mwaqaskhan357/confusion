import { type } from "../type";

export const set_promotions = (promotions) => (dispatch) => {
  dispatch({ type: type.SET_PROMOTIONS, payload: promotions });
};
