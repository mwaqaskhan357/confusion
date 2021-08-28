import { type } from "../type";
import { DISHES } from "../../shared/dishes";

export const set_dishes = () => (dispatch) => {
  dispatch(dishesLoading());

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

const dishesLoading = () => ({
  type: type.DISHES_LOADING,
});

const dishesFailed = (errorMessage) => ({
  type: type.DISHES_FAILED,
  payload: errorMessage,
});

const addDishes = (dishes) => ({
  type: type.SET_DISHES,
  payload: dishes,
});
