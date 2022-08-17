import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import collaboratorReducer from "./CollaboratorReducers";
import refundReducer from './RefundReducers'
import pageReducer from './PageReducers'

export default combineReducers ({
    authReducer,
    collaboratorReducer,
    refundReducer,
    pageReducer
})