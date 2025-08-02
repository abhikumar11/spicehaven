import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import cartReducer from "./reducer/cartReducer";
import authReducer from "./reducer/authReducer";
import restaurantReducer from "./reducer/restaurantReducer";

export const store = createStore(combineReducers({
    cart: cartReducer,
    auth:authReducer,
    restaurant:restaurantReducer,
}),{},applyMiddleware(thunk));
