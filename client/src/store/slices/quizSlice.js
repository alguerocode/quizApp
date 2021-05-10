import { createSlice } from '@reduxjs/toolkit';


const quizSlice = createSlice({
  name: 'quizzes',
  initialState: [],
  reducers: {
    fetchQuizzes(state, action) {
      return state = action.payload;
    },
    addQuizzes(state, action) {
      state.push(action.payload);
    },
    deleteQuiz(state, action) {
      return state.filter(quiz => (quiz._id !== action.payload))
    }
  },
});

export const quizReducer = quizSlice.reducer;
export const { fetchQuizzes, addQuizzes, deleteQuiz } = quizSlice.actions;
