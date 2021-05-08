export interface QuestionTemplateRule {
  question: string;
  options: [
    option1: string,
    option2: string,
    option3: string,
    option4: string
  ],
  trueValue:number
}

const QuestionTemplate: React.FC<QuestionTemplateRule> = (props) => {
  return (
  <div className="template">

  </div>
  );
};

export default QuestionTemplate;
