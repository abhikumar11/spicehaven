import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../constant";

const initialState = {
    order: null,
    loading: false,
    error: null,
    success: false
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return { ...state, loading: true, error: null, success: false };
        case CREATE_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, success: true, order: action.payload.order };
        case CREATE_ORDER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default: return state;
    }
}
export default orderReducer;