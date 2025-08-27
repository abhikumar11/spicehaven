import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productReducer";
export const store=createStore(combineReducers({
    auth:userReducer,
    cart:cartReducer,
    product:productReducer
}),{},applyMiddleware(thunk))