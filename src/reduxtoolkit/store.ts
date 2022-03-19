import { configureStore } from '@reduxjs/toolkit'
import blogs from './blogs'

export const store = configureStore({
  reducer: { blogs: blogs },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
