import { configureStore } from '@reduxjs/toolkit';
import { quizReducer } from './slices/quizSlice'


export const store = configureStore({
  reducer: {
    quizzes: quizReducer
  }
})