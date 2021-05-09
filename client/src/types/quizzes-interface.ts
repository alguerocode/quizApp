
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

export interface QuizRule {
  title:string,
  description:string,
  questions:QuestionTemplateRule[];
}
