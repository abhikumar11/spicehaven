import {CREATE_ORDER_FAIL,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS} from "../constant";
import axios from "axios";
export const createOrder=(item,deliveryAddress)=>async(dispatch,getState)=>{
        try {
            dispatch({ type: CREATE_ORDER_REQUEST });
            const { auth } = getState();
            const token = auth?.user?.token;
            const { data } = await axios.post(
                "http://localhost:3001/api/order/create",
                { item, deliveryAddress },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
        } catch (err) {
            dispatch({
                type: CREATE_ORDER_FAIL,
                payload: err.response?.data?.message || "Order failed",
            });
        }
    };
