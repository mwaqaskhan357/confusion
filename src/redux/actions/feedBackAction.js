import { baseUrl } from "../../shared/baseUrl";
import { type } from "../type";

export const post_feedBack = (feedback) => (dispatch) => {
  fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
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
    .then((feedback) => {
      dispatch(addFeedback(feedback));
      alert("Feedback response" + JSON.stringify(feedback));
    })
    .catch((error) => {
      dispatch(feedbackFail(error.message));
      alert("Error message" + JSON.stringify(error.message));
    });
};

const addFeedback = (feedback) => ({
  type: type.POST_FEEDBACK,
  payload: feedback,
});

const feedbackFail = (error) => ({
  type: type.FEEDBACK_ERROR,
  payload: error,
});
