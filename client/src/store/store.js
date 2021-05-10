import { configureStore } from '@reduxjs/toolkit';
import { quizReducer } from './slices/quizSlice'
import { resultsReducer } from './slices/results'

export const store = configureStore({
  reducer: {
    quizzes: quizReducer,
    results: resultsReducer
  }
})