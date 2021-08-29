import { baseUrl } from "../../shared/baseUrl";
import { type } from "../type";

export const set_comments = () => (dispatch) => {
  fetch(baseUrl + "comments")
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
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

const addComments = (comments) => ({
  type: type.ADD_COMMENTS,
  payload: comments,
});

const commentsFailed = (errorMessage) => ({
  type: type.COMMENTS_FAILED,
  payload: errorMessage,
});

export const post_comment = (comment) => (dispatch) => {
  const newComment = comment;
  newComment.date = new Date().toISOString();

  fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
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
    .then((comments) =>
      dispatch({ type: type.POST_COMMENT, payload: comments })
    )
    .catch((error) => dispatch(commentsFailed(error.message)));
};
