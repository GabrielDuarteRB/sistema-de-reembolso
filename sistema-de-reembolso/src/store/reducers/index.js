import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import collaboratorReducer from "./CollaboratorReducers";

export default combineReducers ({
    authReducer,
    collaboratorReducer
})