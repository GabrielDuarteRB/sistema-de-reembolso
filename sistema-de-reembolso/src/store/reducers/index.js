import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import usersReducer from "./UsersReducers";
import refundReducer from './RefundReducers'
import pageReducer from './PageReducers'

export default combineReducers ({
    authReducer,
    usersReducer,
    refundReducer,
    pageReducer
})