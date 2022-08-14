import { createSlice } from '@reduxjs/toolkit';

export const cartCount = createSlice({
  name: 'cartitem',
  initialState: {
    value: 0,
    resData: null,
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
    setResData: (state,action) => {
      state.resData = action.payload
    }
  },
});
export const { addToCart, removeItem, emptyCart,setResData} = cartCount.actions;
export const selectCount = state => state.cartitem.value;
export const selectData = state => state.cartitem.resData;
export default cartCount.reducer;
