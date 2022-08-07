import { createSlice } from '@reduxjs/toolkit';

export const cartCount = createSlice({
  name: 'cartitem',
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: state => {
      state.value += 1;
    },
    removeItem: state => {
      state.value -= 1;
    },
    emptyCart: state => {
      state.value = 0;
    },
  },
});
export const { addToCart, removeItem, emptyCart } = cartCount.actions;
export const selectCount = state => state.cartitem.value;
export default cartCount.reducer;
