import { configureStore } from '@reduxjs/toolkit';
import { mapSlice } from '../slices/mapSlice';


export const appStore = configureStore({
  reducer: {
    map: mapSlice.reducer, 
  },
});

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

