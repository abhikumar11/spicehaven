import { toast } from "react-toastify";
import { ADD_TO_CART, DECREASE_QTY, INCREASE_QTY } from "../constant";

export const addToCart=(item)=>(dispatch)=>{
    try{
            dispatch({type:ADD_TO_CART,payload:item});
    }catch(err){
          
                  toast.error("Unable to add to cart");
    }
}
export const increaseQty=(item)=>(dispatch)=>{
  try {
        dispatch({type:INCREASE_QTY,payload:item});
  } catch (err) {
    toast.error("Unable to increase qty");
  }
}
export const decreaseQty=(item)=>(dispatch)=>{
  try {
        dispatch({type:DECREASE_QTY,payload:item});
  } catch (err) {
    toast.error("Unable to decrease qty");
  }
}