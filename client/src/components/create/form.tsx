import React, {useEffect, useState} from 'react';
import QuestionTemplate, {QuestionTemplateRule} from './question-template';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../styles/create.css';
const QuizForm: React.FC = () => {
  useEffect(() => {
    document.title = 'Create | quiz app';
  }, []);
  const [questions, setQuestions] = useState<QuestionTemplateRule[] | []>([]);
  const [question, setQuestion] = useState<QuestionTemplateRule>({
    question: '',
    options: {
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    },
    trueValue: '',
    id: null,
  });
  const addHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !question.question.trim() ||
      !question.trueValue.trim() ||
      !question.options.option1.trim() ||
      !question.options.option2.trim() ||
      !question.options.option3.trim() ||
      !question.options.option4.trim()
    ) {
      alert('the form not compeleted correctly');
      return;
    }
    if (
      question.options.option1.trim() === question.trueValue ||
      question.options.option2.trim() === question.trueValue ||
      question.options.option3.trim() === question.trueValue ||
      question.options.option4.trim() === question.trueValue
    ) {
      setQuestions([...questions, {...question, id: Math.random()}]);
      // clear();
      return;
    } else {
      alert('the answer value not valid must be one of the options');
      return;
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clear();
  };
  const clear = () => {
    setQuestion({
      question: '',
      options: {option1: '', option2: '', option3: '', option4: ''},
      trueValue: '',
      id: null,
    });
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
          value={question.question}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion({...question, question: e.target.value})
          }
          required
        />
        <h3>options</h3>
        <label htmlFor="option1">1</label>
        <input
          placeholder="option 1"
          type="text"
          name="option1"
          required
          value={question.options.option1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion({
              ...question,
              options: {...question.options, option1: e.target.value},
            })
          }
        />
        <label htmlFor="optio2">2</label>
        <input
          placeholder="option 2"
          type="text"
          name="option2"
          value={question.options.option2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion({
              ...question,
              options: {...question.options, option2: e.target.value},
            })
          }
          required
        />
        <label htmlFor="option3">3</label>
        <input
          placeholder="option 3"
          type="text"
          name="option3"
          value={question.options.option3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion({
              ...question,
              options: {...question.options, option3: e.target.value},
            })
          }
          required
        />
        <label htmlFor="option4">4</label>
        <input
          placeholder="option 4"
          type="text"
          name="option4"
          value={question.options.option4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion({
              ...question,
              options: {...question.options, option4: e.target.value},
            })
          }
          required
        />
        <label htmlFor="answer">answer</label>
        <input
          placeholder="must be one of the option"
          type="text"
          name="answer"
          id="answer"
          value={question.trueValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion({
              ...question,
              trueValue: e.target.value,
            })
          }
          required
        />
        <div className="buttons">
          <button onClick={addHandler}>
            add <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="submit" onClick={submitHandler}>
            submit
          </button>
        </div>
      </form>
      <div className="questions">
        {questions &&
          questions.map((questionTemplate: QuestionTemplateRule) => (
            <QuestionTemplate key={questionTemplate.id}
              question={questionTemplate}
              setQuestions={setQuestions}
              questions={questions}
            />
          ))}
      </div>
    </div>
  );
};

export default QuizForm;
