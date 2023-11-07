// redux/actions.js
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        product,
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id,
    };
};
export const increaseQuantity = (id) => {
    return {
        type: 'INCREASE_QUANTITY',
        id,
    };
};
export const decreaseQuantity = (id) => {
    return {
        type: 'DECREASE_QUANTITY',
        id,
    };
};
