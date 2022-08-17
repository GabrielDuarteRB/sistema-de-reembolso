import { combineReducers } from "redux";
import authReducer from "./authReducers";
import usersReducer from "./usersReducers";
import refundReducer from "./refundReducers";
import pageReducer from "./pageReducers";

export default combineReducers({
  authReducer,
  usersReducer,
  refundReducer,
  pageReducer,
});
