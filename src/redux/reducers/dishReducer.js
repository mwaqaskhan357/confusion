import { DISHES } from "../../shared/dishes";
import { type } from "../type";

export const dishReducer = (state = { dishes: DISHES }, action) => {
  switch (action.type) {
    case type.SET_DISHES:
      return {
        ...state,
        dishes: action.dishes,
      };
    default:
      return state;
  }
};
