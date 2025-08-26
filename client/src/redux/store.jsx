import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";
export const store=createStore(combineReducers({
    auth:userReducer,
    cart:cartReducer
}),{},applyMiddleware(thunk))