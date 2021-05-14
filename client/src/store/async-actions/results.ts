import {createAsyncThunk} from '@reduxjs/toolkit';
import {ResultsAPI} from '../../api/results';
import {addResult, fetchResults, deleteResult} from '../slices/resultsSlice';
import {Result} from '../../types/results-interface';


export const fetch_results = createAsyncThunk(
  'result/fetch-results',
  (arg: void, {dispatch}) => {
    ResultsAPI.fetch_all()
      .then(data => {
        dispatch(fetchResults(data));
      })
      .catch((err) => console.log(err));
  }
);

export const add_result = createAsyncThunk(
  'result/add-result',
  (quiz: Result, {dispatch}) => {
    ResultsAPI.post(quiz)
      .then((newQuiz) => {
        dispatch(addResult(newQuiz));
        window.location.assign('/results');
      })
      .catch((err) => console.log(err));
  }
);

export const delete_result = createAsyncThunk(
  'result/delet/resultzes',
  (_id: string, {dispatch}) => {
    ResultsAPI.delete(_id)
      .then(() => {
        dispatch(deleteResult(_id));
      })
      .catch((err) => console.log(err));
  }
);
