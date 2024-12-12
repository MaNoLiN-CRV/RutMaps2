import { configureStore } from '@reduxjs/toolkit';

import { api } from '../../api/api';
import themeSlice from '../slices/themeSlice';


export const appStore = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  },
  });

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

