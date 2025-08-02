import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS,LOGOUT } from "../constants";

const initialState={
    user:JSON.parse(localStorage.getItem("user"))||null,
    token:localStorage.getItem("token")||null,
    loading:false,
    error:null,
}
function authReducer(state=initialState,action) {
    switch (action.type) {
        case AUTH_REQUEST:{
            return{...state,loading:true,error:null};
        }
        case AUTH_SUCCESS:{
            return{...state,loading:false,user:action.payload.user,token:action.payload.token};
        }
        case AUTH_FAIL:{
            return{...state,loading:false,error:action.payload}
        }
        case LOGOUT:{
            return { user: null, token: null, loading: false, error: null };
        }
        default:return state;
    }
}
export default authReducer;