import { type } from "../type";

export const set_dishes = (dishes) => (dispatch) => {
  dispatch({
    type: type.SET_DISHES,
    dishes,
  });
};
