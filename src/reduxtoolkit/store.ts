import blogs from './blogs';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { blogs },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
