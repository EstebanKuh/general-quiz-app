import { create } from "zustand";
import { QuizState, Answer } from "../types";
import { saveQuizProgress, loadQuizProgress, clearQuizProgress } from "../services/localStorage";

export const useQuizStore = create<QuizState>((set) => {
  const savedProgress = loadQuizProgress();

  const initialState = {
    questions: savedProgress ? savedProgress.questions : [],
    currentIndex: savedProgress ? savedProgress.currentIndex: 0,
    answers: savedProgress ? savedProgress.answers : [],
  }

  return {
    ...initialState,
    setQuestions: (questions) => {
      set({ questions, currentIndex: 0, answers: [] })
      saveQuizProgress(0, [], questions);
    },
    answerQuestion: (answer: Answer) => set((state) => {
      const newAnswers = [...state.answers, answer];
      saveQuizProgress(state.currentIndex + 1, newAnswers, state.questions);
      return {
        answers: newAnswers,
        currentIndex: state.currentIndex + 1,
      };
    }),
    resetQuiz: () => {
      clearQuizProgress();
      set({ questions: [], currentIndex: 0, answers: [] });
    },
  };
});
