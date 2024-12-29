import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  total: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const item = { ...product, quantity: 1 };
        state.cartItems.push(item);
      }
      state.totalAmount += product.price;
    },
    removeFromCart: (state) => {},
    incrementQuantity: (state) => {},
    decrementQuantity: (state) => {},
    clearCart: (state) => {},
  },
});
