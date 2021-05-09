import {createAsyncThunk} from '@reduxjs/toolkit';
import {QuizAPI} from '../../api/quizzes';
import {addQuizzes, deleteQuizzes, fetchQuizzes} from '../slices/quizSlice';

export const fetch_quizzes = createAsyncThunk(
  'quiz/fetch-quizzez',
  (arg: void, {dispatch}) => {
    QuizAPI.fetch_all()
      .then((data) => {
        dispatch(fetchQuizzes(data));
      })
      .catch((err) => console.log(err));
  }
);

export const add_quiz = createAsyncThunk(
  'quiz/add-quiz',
  (quiz: object, {dispatch}) => {
    QuizAPI.post(quiz)
      .then((newQuiz) => {
        dispatch(addQuizzes(newQuiz));
      })
      .catch((err) => console.log(err));
  }
);
export const delete_quiz = createAsyncThunk(
  'quiz/delet/quizzes',
  (_id: string, {dispatch}) => {
    QuizAPI.delete(_id)
      .then(() => {
        dispatch(deleteQuizzes(_id));
      })
      .catch((err) => console.log(err));
  }
);
