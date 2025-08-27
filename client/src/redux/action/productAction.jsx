import axios from "axios";
import { toast } from "react-toastify";
import {
     FETCH_PRO_REQUEST,
     FETCH_PRO_SUCCESS,
     FETCH_PRO_FAIL,
} from "../constant";

export const fetchAllProducts = () => async (dispatch) => {
     try {
          dispatch({ type: FETCH_PRO_REQUEST });
          const res = await axios.get(
               "http://localhost:3001/api/product/getall"
          );
          const { pro } = res.data;
          dispatch({ type: FETCH_PRO_SUCCESS, payload: pro });
     } catch (err) {
          dispatch({
               type: FETCH_PRO_FAIL,
               payload: err.response?.data?.msg || "Fetching Failed",
          });
          toast.error("Something went wrong");
     }
};
