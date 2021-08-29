import { type } from "../type";

export const dishReducer = (
  state = { isLoading: true, errorMessage: null, dishes: [] },
  action
) => {
  switch (action.type) {
    case type.ADD_DISHES:
      return {
        ...state,
        dishes: action.payload,
        isLoading: false,
        errorMessage: null,
      };
    case type.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        dishes: [],
      };
    case type.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        dishes: [],
      };
    default:
      return state;
  }
};
