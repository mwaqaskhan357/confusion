// comments types

import { type } from "../type";

export const commentReducer = (
  state = { comments: [], errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.ADD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        errorMessage: null,
      };
    case type.POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        errorMessage: null,
      };
    case type.COMMENTS_FAILED:
      return {
        ...state,
        comments: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

// contactreset action

import { type } from "../type";
const initialFeadback = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};

export const contactReducer = (state = initialFeadback, action) => {
  switch (action.type) {
    case type.RESET_FORM:
      return state;
    default:
      return state;
  }
};

// dishes type

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

// feedback types

import { type } from "../type";

export const feedBackReducer = (
  state = { feedbacks: [], errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.POST_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
        errorMessage: null,
      };
    case type.FEEDBACK_ERROR:
      return {
        ...state,
        feedbacks: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

// leaders types

import { type } from "../type";

export const leaderReducer = (
  state = { leaders: [], isLoading: true, errorMessage: null },
  action
) => {
  switch (action.type) {
    case type.ADD_LEADERS:
      return {
        ...state,
        leaders: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case type.LEADERS_LOADING:
      return {
        ...state,
        leaders: [],
        errorMessage: null,
        isLoading: true,
      };
    case type.LEADERS_FAILED:
      return {
        ...state,
        leaders: [],
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

// promotions types

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
