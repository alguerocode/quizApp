export interface QuestionTemplateProps {
  question: string;
  options: [
    option1: string,
    option2: string,
    option3: string,
    option4: string
  ],
  trueValue:number
}

const QuestionTemplate: React.FC<QuestionTemplateProps> = (props) => {
  return (
  <div className="template">

  </div>
  );
};

export default QuestionTemplate;
