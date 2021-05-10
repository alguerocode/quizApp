import React, {useEffect, useState} from 'react';
import {DB_QuizRule} from '../types/quizzes-interface';
import {QuizAPI} from '../api/quizzes';
import '../styles/quiz.css';
import {add_result} from '../store/async-actions/results';
import {useDispatch} from 'react-redux';


const Quiz: React.FC = ({match}: any) => {
  const [quiz, setQuiz] = useState<DB_QuizRule | null>(null);
  const dispatch = useDispatch();
  document.title = 'Quiz time | quiz app';
  const id = match.params.id;
  const sendHandler = () => {
    const selectElments = document.querySelectorAll('#options') as unknown as HTMLSelectElement[];
    let degree:number = 0;
    for(let i =0 ;i < selectElments.length;i++) {
      if(quiz?.questions[i].trueValue === selectElments[i].value) {
        degree++
      }
    }
    // check the degree;
   dispatch(add_result({
     title:quiz?.title,
     description:quiz?.description,
     degree:`${degree} / ${quiz?.questions.length}`
   }))
    window.location.assign('/results');
  };
  useEffect(() => {
    QuizAPI.get_quiz(id)
      .then((data: DB_QuizRule) => {
        setQuiz(data);
      })
      .catch((err: Error) => console.log(err));
  }, [id]);
  return (
    <div className="quiz">
      <h1>{quiz?.title}</h1>
      <p>{quiz?.description}</p>
      {quiz?.questions.map((question) => (
        <div className="question" key={question.id}>
          <h4>{question.question}</h4>
          <select name="options" id="options">
            <option value={question.options.option1}>
              {question.options.option1}
            </option>
            <option value={question.options.option2}>
              {question.options.option2}
            </option>
            <option value={question.options.option3}>
              {question.options.option3}
            </option>
            <option value={question.options.option4}>
              {question.options.option4}
            </option>
          </select>
        </div>
      ))}
      <button onClick={sendHandler}>send</button>
    </div>
  );
};

export default Quiz;
