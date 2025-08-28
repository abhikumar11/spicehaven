import { ADD_TO_CART, CLEAR_CART, DECREASE_QTY, INCREASE_QTY, REMOVE_FROM_CART } from "../constant";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const exists = state.cartItems.find((i) => i._id === item._id);
      if (exists) {
        return {
          ...state,
          items: state.cartItems.map((i) =>
            i._id === item._id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...item, quantity: 1 },
          ],
        };
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i._id !== action.payload
        ),
      };
    case INCREASE_QTY:
      {
        const itemid= action.payload;
        return {
          ...state, cartItems: state.cartItems.map((pro) => pro._id === itemid ? { ...pro, quantity: pro.quantity + 1 } : pro)
        }
      };
    case DECREASE_QTY: {
      const itemid = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((i) =>
            i._id === itemid ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
