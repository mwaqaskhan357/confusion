import { type } from "../type";
import { baseUrl } from "../../shared/baseUrl";

export const set_promotions = () => (dispatch) => {
  dispatch(isLoading());

  fetch(baseUrl + "promotions")
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
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((error) => dispatch(promoFailed(error.message)));
};

const addPromotions = (promotions) => ({
  type: type.ADD_PROMOTIONS,
  payload: promotions,
});

const isLoading = () => ({
  type: type.PROMO_LOADING,
});

const promoFailed = (errorMessage) => ({
  type: type.PROMO_FAILED,
  payload: errorMessage,
});
