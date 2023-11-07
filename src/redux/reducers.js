// // redux/reducers.js
// const initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       // return {
//       //   ...state,
//       //   cart: [...state.cart, action.product],
//       // };
//       const existingItem = state.cart.find((item) => item.itemname === action.product.itemname);
//       if (existingItem) {
//         existingItem.quantity += 0;
//         return { ...state, cart: [...state.cart] };
//       } else {
//         return { ...state, cart: [...state.cart, action.product] };
//       }
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.id),
//       };
//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.id
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         ),
//       };
//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.id
//             ? {
//               ...item,
//               quantity: item.quantity ? Math.max(item.quantity - 1, 1) : 1,
//             }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;


// redux/reducers.js

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find((item) => item.itemname === action.product.itemname);
      if (existingItem) {
        existingItem.quantity += 0;
        const updatedCart = [...state.cart];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, action.product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { ...state, cart: updatedCart };
      }
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter((item) => item.id !== action.id);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    case 'INCREASE_QUANTITY':
      const increasedCart = state.cart.map((item) =>
        item.id === action.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(increasedCart));
      return {
        ...state,
        cart: increasedCart,
      };
    case 'DECREASE_QUANTITY':
      const decreasedCart = state.cart.map((item) =>
        item.id === action.id
          ? {
            ...item,
            quantity: item.quantity ? Math.max(item.quantity - 1, 1) : 1,
          }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(decreasedCart));
      return {
        ...state,
        cart: decreasedCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
