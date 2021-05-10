import React, {useEffect, useState} from 'react';
import {DB_QuizRule} from '../types/quizzes-interface';
import {QuizAPI} from '../api/quizzes';
import '../styles/quiz.css';
const Quiz: React.FC = ({match}:any) => {
  document.title = 'Quiz | quiz app';
  const [quiz, setQuiz] = useState<DB_QuizRule | null>(null);
  const id = match.params.id;
  const sendHandler =() =>{
    
  }
  useEffect(() => {
    QuizAPI.get_quiz(id)
      .then((data:DB_QuizRule) => {
        setQuiz(data);
      })
      .catch((err: any) => console.log(err));
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
