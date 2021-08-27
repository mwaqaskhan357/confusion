import { PROMOTIONS } from "../../shared/promotions";
import { type } from "../type";

export const promotionReducer = (
  state = { promotions: PROMOTIONS },
  action
) => {
  switch (action.type) {
    case type.SET_PROMOTIONS:
      return { ...state, promotions: action.promotions };
    default:
      return state;
  }
};
