export interface Question {
  category: string;
  type: "multiple" | "boolean";
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Answer {
  question: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
}

/**
 * State
 */
export interface QuizState {
  questions: Question[];
  currentIndex: number;
  answers: Answer[];
  setQuestions: (questions: Question[]) => void;
  answerQuestion: (answer: Answer) => void;
  resetQuiz: () => void;
}

/**
 * Props
*/
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export interface PropsQuestionCard {
  question: Question;
  onAnswer: (answer: string) => void;
}