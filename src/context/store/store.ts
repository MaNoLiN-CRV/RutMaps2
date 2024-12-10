import { configureStore } from '@reduxjs/toolkit';
import { mapSlice } from '../slices/countrySlice';
import { api } from '../../api/api';

export const appStore = configureStore({
  reducer: {
    [mapSlice.name]: mapSlice.reducer, 
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  },
  });

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

