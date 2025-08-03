import { ALL_RESTAURANTS_SUCCESS, RESTAURANT_MENU_SUCCESS } from "../constants";

const initialState={
    restaurants:[],
    menus:[],
};

function restaurantReducer(state=initialState,action){
    switch (action.type) {
        case ALL_RESTAURANTS_SUCCESS:{
            return {...state,restaurants:action.payload}
        }
        case RESTAURANT_MENU_SUCCESS:{
            return {...state,menus:action.payload};
        }
        default:return state;
    }
}
export default restaurantReducer;