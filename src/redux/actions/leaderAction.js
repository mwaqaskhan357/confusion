import { baseUrl } from "../../shared/baseUrl";
import { type } from "../type";

export const set_leaders = () => (dispatch) => {
  dispatch(leaderLoading());

  fetch(baseUrl + "leaders")
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
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((error) => dispatch(leaderFailed(error.message)));
};

const addLeaders = (leaders) => ({
  type: type.ADD_LEADERS,
  payload: leaders,
});

const leaderLoading = () => ({
  type: type.LEADERS_LOADING,
});

const leaderFailed = (errorMessage) => ({
  type: type.LEADERS_FAILED,
  payload: errorMessage,
});
