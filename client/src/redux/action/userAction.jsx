import axios from "axios";
import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from "../constant";
import { toast } from "react-toastify";
export const loginUser = (frmData) => async (dispatch) => {
    try {
        const { email, password } = frmData;
        dispatch({ type: AUTH_REQUEST })
        const res = await axios.post("http://localhost:3001/api/user/login", { email, password });

        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: AUTH_SUCCESS, payload: { token, user } });
        toast.success("Login successful!");

    } catch (err) {
        dispatch({ type: AUTH_FAIL, payload: err.response?.data?.msg || "Login failed" });
        toast.error("Login failed");
    }
}

export const registerUser = (frmData) => async (dispatch) => {
    try {
        const { name, email, password } = frmData;
        dispatch({ type: AUTH_REQUEST })
         await axios.post("http://localhost:3001/api/user/registeruser",{name,email,password});
        dispatch({ type: AUTH_SUCCESS, payload: { token: null, user: null } });
        
    } catch (err) {
        dispatch({ type: AUTH_FAIL, payload: err.response?.data?.message || err.message })
    }
}

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type:LOGOUT});
};