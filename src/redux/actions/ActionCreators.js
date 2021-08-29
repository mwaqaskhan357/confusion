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

// contactaction

import { type } from "../type";

export const resetForm = () => (dispatch) => {
  dispatch({
    type: type.RESET_FORM,
  });
};

// dishes actions

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

// feedback action

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

// leaders action

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

// promotions actions

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
