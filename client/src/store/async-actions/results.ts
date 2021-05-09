import {createAsyncThunk} from '@reduxjs/toolkit';
import {ResultsAPI} from '../../api/results';
import {addResult, fetchResults, deleteResult} from '../slices/results';

export const fetch_resultzes = createAsyncThunk(
  'result/fetch-results',
  (arg:void, {dispatch}) => {
    ResultsAPI.fetch_all()
      .then((data) => {
        dispatch(fetchResults(data));
      })
      .catch((err) => console.log(err));
  }
);


export const add_result = createAsyncThunk(
  'result/add-result',
  (result: object, {dispatch}) => {
    ResultsAPI.post(result)
      .then((newResult) => {
        dispatch(addResult(newResult));
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
