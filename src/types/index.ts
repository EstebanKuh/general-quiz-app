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
 * HTML Components Props
*/
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "primary" | "secondary";
  items: APICategory[] | APIListStringResponse[];
  children?: React.ReactNode;
}

/**
 * Components Props
 */
export interface PropsQuestionCard {
  question: Question;
  onAnswer: (answer: string) => void;
}

/**
 * API
 */
export interface APICategory {
  id: number;
  name: string;
};
export interface APIListStringResponse {
  id: string;
  name: string;
};

export interface APICategoryResponse {
  trivia_categories: APICategory[];
};

export type QuizzDifficult = 'easy' | 'medium' | 'hard';
export type QuizzType = 'multiple' | 'boolean';
