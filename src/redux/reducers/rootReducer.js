import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";
import { contactReducer } from "./contactReducer";
import { dishReducer } from "./dishReducer";
import { leaderReducer } from "./leaderReducer";
import { promotionReducer } from "./promotionReducer";

export default combineReducers({
  leaders: leaderReducer,
  dishes: dishReducer,
  comments: commentReducer,
  promotions: promotionReducer,
  initialFeadback: contactReducer,
});
