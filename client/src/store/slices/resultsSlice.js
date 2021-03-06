import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
  name: 'results',
  initialState: [],
  reducers: {
    fetchResults(state, action) {
      return state = action.payload;
    },
    addResult(state, action) {
      state.push(action.payload);
    },
    deleteResult(state, action) {
      return state.filter(quiz => {
        return quiz._id !== action.payload;
      })
    }
  },
});

export const resultsReducer = resultSlice.reducer;
export const { fetchResults,addResult, deleteResult } = resultSlice.actions;
