import {createSlice} from '@reduxjs/toolkit';

// interface QuizStructure {
//   title: string;
//   description: string;
//   questions: number;
// }

// interface QuizStructure  {
//   title: string;
//   description: string;
//   questions: number;
// }
const quizSlice = createSlice({
  name: 'Quizes',
  initialState: [],
  reducers: {
    fetchQuizzes(state, action: {payload: []}) {
      return state.concat(action.payload);
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const {fetchQuizzes} = quizSlice.actions;
