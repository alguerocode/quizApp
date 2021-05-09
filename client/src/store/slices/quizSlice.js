import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quizzes',
  initialState: [],
  reducers: {
    fetchQuizzes(state, action) {
      return state.concat(action.payload);
    },
    addQuizzes(state, action) {
      state.push(action.payload);
    },
    deleteQuizzes(state, action) {
      return state.filter(quiz => {
        return quiz._id !== action.payload._id;
      })
    }
  },
});

export const quizReducer = quizSlice.reducer;
export const { fetchQuizzes,addQuizzes, deleteQuizzes } = quizSlice.actions;
