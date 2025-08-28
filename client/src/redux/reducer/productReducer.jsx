import {FETCH_PRO_FAIL,FETCH_PRO_REQUEST,FETCH_PRO_SUCCESS} from "../constant";

const initialState = {
     loading: false,
     productList: [],
     error: null,
};
const productReducer = (state = initialState, action) => {
     switch (action.type) {
          case FETCH_PRO_REQUEST:
               return { ...state, loading: true, error: null };
          case FETCH_PRO_SUCCESS:
               return { ...state, loading: false, productList: action.payload };
          case FETCH_PRO_FAIL:
               return { ...state, loading: false, error: action.payload };
          default:
               return state;
     }
};
export default productReducer;
