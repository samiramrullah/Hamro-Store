import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer from '../redux/slice/CartSlice';
import productReducer from '../redux/slice/ProductSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
