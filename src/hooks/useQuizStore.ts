import { create } from "zustand";
import { QuizState } from "../types";

export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  currentIndex: 0,
  answers: [],
  setQuestions: (questions) => set({ questions, currentIndex: 0, answers: [] }),
  answerQuestion: (answer) =>
    set((state) => ({
      answers: [...state.answers, answer],
      currentIndex: state.currentIndex + 1,
    })),
  resetQuiz: () => set({ questions: [], currentIndex: 0, answers: [] }),
}));
