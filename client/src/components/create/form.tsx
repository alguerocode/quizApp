import React, {useEffect, useState} from 'react';
import {QuestionTemplateRule} from './question-template';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../styles/create.css';
const QuizForm: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionTemplateRule[] | []>([]);
  useEffect(() => {
    document.title = 'Create | quiz app';
  }, []);
  const addHandler = (e: Event) => {
    e.preventDefault();
  };
  const submitHandler = (e: Event) => {
    e.preventDefault();
  };
  return (
    <div className="create">
      <form>
        <h2 className="form">Quiz Form</h2>
        <h3>title</h3>
        <input type="text" name="title" id="title" placeholder="title" />
        <h3>description</h3>
        <textarea name="description" id="description" cols="30" rows="10" />
        <h3>question</h3>
        <input
          type="text"
          name="question"
          id="question"
          placeholder="question"
        />
        <h3>options</h3>
        <label htmlFor="option1">1</label>
        <input type="text" name="option1" />
        <label htmlFor="optio2">2</label>
        <input type="text" name="option2" />
        <label htmlFor="option3">3</label>
        <input type="text" name="option3" />
        <label htmlFor="option4">4</label>
        <input type="text" name="option4" />
        <label htmlFor="answer">number of answer</label>
        <input type="number" name="answer" id="answer" max="4" min="1" />
        <div className="buttons">
          <button>
            add <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="submit" onClick={submitHandler}>
            submit
          </button>
        </div>
      </form>
      <div className="questions">{questions}</div>
    </div>
  );
};

export default QuizForm;
