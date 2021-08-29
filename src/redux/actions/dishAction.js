import { baseUrl } from "../../shared/baseUrl";
import { type } from "../type";

export const set_dishes = () => (dispatch) => {
  dispatch(dishesLoading());

  fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errormess = new Error(error.message);
        throw errormess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

const dishesLoading = () => ({
  type: type.DISHES_LOADING,
});

const dishesFailed = (errorMessage) => ({
  type: type.DISHES_FAILED,
  payload: errorMessage,
});

const addDishes = (dishes) => ({
  type: type.ADD_DISHES,
  payload: dishes,
});
