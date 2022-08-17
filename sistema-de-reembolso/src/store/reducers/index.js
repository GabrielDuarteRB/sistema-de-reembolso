import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import collaboratorReducer from "./CollaboratorReducers";
import refundReducer from './RefundReducers'

export default combineReducers ({
    authReducer,
    collaboratorReducer,
    refundReducer,
})