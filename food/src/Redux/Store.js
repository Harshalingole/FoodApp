import { configureStore } from '@reduxjs/toolkit';
import cartCountReducer from './CartCount';

export default configureStore({
  reducer: {
    cartitem: cartCountReducer,
  },
});
