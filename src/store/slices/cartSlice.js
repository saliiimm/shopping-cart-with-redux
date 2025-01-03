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
      state.total += product.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex >= 0) {
        state.total -=
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const product = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        state.total += state.cartItems[itemIndex].price;
      }
    },
    decrementQuantity: (state, action) => {
      const product = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
          state.total -= state.cartItems[itemIndex].price;
        } else {
          state.total -= state.cartItems[itemIndex].price;
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const {
  addItemToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
