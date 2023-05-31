import { configureStore } from '@reduxjs/toolkit'
import NewsSlice from '../features/News/NewsSlice'

export const store = configureStore({
  reducer: {
    news: NewsSlice
  },
})