import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DB_QuizRule} from '../types/quizzes-interface';
import {fetch_quizzes,delete_quiz} from '../store/async-actions/quiz';
import '../styles/home.css'

const Home: React.FC = () => {
  document.title = 'Home | quiz app';
  const dispatch = useDispatch();
  const allQuizzes: DB_QuizRule[] = useSelector(
    (state: {quizzes: DB_QuizRule[]}) => state.quizzes
  );
  const deleteHandler = (_id:string):void =>{
    if(window.confirm('do you want to delete quiz')) {
      dispatch(delete_quiz(_id));
    }
  }
  const startHandler = (_id:string) =>{
    window.location.assign(`/quiz/${_id}`);
  }
  useEffect(() => {
    dispatch(fetch_quizzes());
  }, [dispatch]);
  return (
    <div className="home">
      {!allQuizzes && "...loading"}
      {allQuizzes && (
        <>
          <h1>all quizzes</h1>
          <div className="quizzes-container">
            {allQuizzes.map((quiz) => (
              <div className="quiz" key={quiz._id}>
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <p>quiz are {quiz.questions.length} questions</p>
                <div className="buttons">
                  <button id="delete" onClick={deleteHandler.bind(null,quiz._id)}>delete</button>
                  <button id="start" onClick={startHandler.bind(null,quiz._id)}>
                    start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {allQuizzes.length === 0 && <h3>there are no quizzes</h3>}
      
    </div>
  );
};

export default Home;
