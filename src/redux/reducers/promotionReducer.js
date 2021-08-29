import { type } from "../type";

export const promotionReducer = (
  state = { promotions: [], isLoading: true, errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.ADD_PROMOTIONS:
      return {
        ...state,
        promotions: action.payload,
        isLoading: false,
        errorMessage: null,
      };
    case type.PROMO_LOADING:
      return {
        ...state,
        promotions: [],
        isLoading: true,
        errorMessage: null,
      };
    case type.PROMO_FAILED:
      return {
        ...state,
        promotions: [],
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
