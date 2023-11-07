// redux/reducers.js
const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // return {
      //   ...state,
      //   cart: [...state.cart, action.product],
      // };
      const existingItem = state.cart.find((item) => item.itemname === action.product.itemname);
      if (existingItem) {
        existingItem.quantity += 0;
        return { ...state, cart: [...state.cart] };
      } else {
        return { ...state, cart: [...state.cart, action.product] };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? {
              ...item,
              quantity: item.quantity ? Math.max(item.quantity - 1, 1) : 1,
            }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
