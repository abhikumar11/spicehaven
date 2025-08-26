import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const exists = state.cartItems.find((i) => i.id === item.id);
      if (exists) {
        return {
          ...state,
          items: state.cartItems.map((i) =>
            i.id === item.id
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
          (i) => i.id !== action.payload
        ),
      };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
