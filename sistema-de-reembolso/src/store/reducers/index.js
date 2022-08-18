import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import refundReducer from "./refundReducer";
import pageReducer from "./pageReducer";
import formReducer from "./formReducer";

export default combineReducers({
  authReducer,
  usersReducer,
  refundReducer,
  pageReducer,
  formReducer,
});
