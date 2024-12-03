import { ActionType } from "../Actions/ActionType";

const Initial = {
  allProduct: [],
  cart: [],
};

export const ProductReducer = (state = Initial, { type, payload }) => {
  switch (type) {
    case ActionType.ALL_PRODUCT:
      return { ...state, allProduct: [...state.allProduct, ...payload] };
      break;

      case ActionType.CART_PRODUCT:
      return { ...state, cart: [...state.cart, payload] };
      break;

      case ActionType.DELETE_PRODUCT:
      return { ...state, cart: [...state.cart.filter((item)=>item.id !== payload.id)] };
      break;

    default:
      return state;
      break;
  }
};
