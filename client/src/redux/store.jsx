import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducer/userReducer";

export const store=createStore(combineReducers({
    auth:userReducer,
}),{},applyMiddleware(thunk))