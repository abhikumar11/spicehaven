import { toast } from "react-toastify";
import { ADD_TO_CART, ALL_RESTAURANTS_SUCCESS, AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS, CLEAR_CART, LOGOUT, REMOVE_FROM_CART, RESTAURANT_MENU_SUCCESS } from "./constants";
import axios from "axios";
export const addToCart = (item) =>async(dispatch)=>{
    
    dispatch({ type: ADD_TO_CART, payload: item });
}
     
export const removeFromCart = (id) =>async(dispatch)=> {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
}
export const clearCart = () =>async(dispatch)=> {
    dispatch({ type: CLEAR_CART });
}
export const loginUser=(form,navigate)=>async(dispatch)=>{
    dispatch({type:AUTH_REQUEST});
    try {
        const res=await axios.post("http://localhost:3001/api/user/login",form);
        const {token,user}=res.data;
        localStorage.setItem("token",token);
        localStorage.setItem("user",JSON.stringify(user));
        dispatch({type:AUTH_SUCCESS,payload:{token,user}});
        
         toast.success("Login successful!");
    } catch (err) {
    dispatch({ type:AUTH_FAIL,payload:err.response?.data?.msg ||"Login failed" });
    toast.error("Login failed");
    }
}
export const registerUser=(form)=>async(dispatch)=>{
    dispatch({type:AUTH_REQUEST});
    try {
        await axios.post("http://localhost:3001/api/user/registeruser",form);
        dispatch({type:AUTH_SUCCESS,payload:{token:null,user:null}});

    } catch (err) {
        dispatch({ type:AUTH_FAIL, payload: err.response?.data?.msg || "Signup failed" });
    }
}
export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type:LOGOUT});
};
export const getAllRestaurant=()=>async(dispatch)=>{
    try {
        const res=await axios.get("http://localhost:3001/api/restaurant/getall");
        dispatch({type:ALL_RESTAURANTS_SUCCESS,payload:res.data});
    } catch (err) {
        
    }
 
}
export const getRestaurantMenu=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`http://localhost:3001/api/restaurant/getbyid/${id}`);
        console.log(res.data)
        dispatch({type:RESTAURANT_MENU_SUCCESS,payload:res.data});
    } catch (err) {
        
    }
}