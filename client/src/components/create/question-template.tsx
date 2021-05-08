import React from 'react';
import '../../styles/question-template.css'
export interface QuestionTemplateRule {
  question: string;
  options: {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  };
  trueValue: string;
  id:number | null;
}

const QuestionTemplate: React.FC<{
  question: QuestionTemplateRule;
  setQuestions: Function;
  questions:QuestionTemplateRule[] | [];
}> = (props) => {
  const {question, setQuestions, questions} = props;
  const deleteHandler = () => {
    setQuestions(questions.filter(ques =>{
      return ques.id !== question.id;
    }))
    console.log('template are deleted');
    // to do
  };
  return (
    <div className="template">
      <h4>{question.question}</h4>
      <p>1.{question.options.option1}</p>
      <p>2.{question.options.option2}</p>
      <p>3.{question.options.option3}</p>
      <p>4.{question.options.option4}</p>
      <p>true value:{question.trueValue}</p>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default QuestionTemplate;
