import { FETCH_PRO_FAIL, FETCH_PRO_REQUEST, FETCH_PRO_SUCCESS } from "../constant";

const initialState={
    loading:false,
    productList:[]
}
const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_PRO_REQUEST:
        case FETCH_PRO_SUCCESS:
        case FETCH_PRO_FAIL:
        default:return state;
    }

}
export default productReducer;