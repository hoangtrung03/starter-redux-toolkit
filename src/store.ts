import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

/* 
  Lấy RootState và AppDispatch từ store
*/
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
