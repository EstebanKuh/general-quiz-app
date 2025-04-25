export const saveQuizProgress = (currentIndex: number, answers: any[], questions: any[]) => {
    const quizProgress = {
        currentIndex,
        answers,
        questions,
    };
    localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
};

export const loadQuizProgress = () => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return null;
};

export const clearQuizProgress = () => {
    localStorage.removeItem("quizProgress");
};
